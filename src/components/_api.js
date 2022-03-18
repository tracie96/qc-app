import axios from "axios";
import { NotificationManager } from "react-notifications";
export const token = localStorage.getItem("token");
export const baseUrl = "https://qc-express.herokuapp.com/api/v1";
export let timoutReq = 10000;
export const axiosCalls = async (path, method, data = null) => {
  try {
    let res = await axios({
      method,
      url: `${baseUrl}/${path}`,
      data,
      // timeout: timoutReq,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    if (error.message == "timeout of 100ms exceeded") {
      return { er: "slowNetwork" };
    }
    return { er: error.response.data };
  }
};

export const axiosFormData = async (path, method, fd) => {
  try {
    let res = await axios({
      method: `${method}`,
      url: `${baseUrl}${path}`,
      data: fd,
      timeout: timoutReq,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res) {
      return res.data;
    }
  } catch (error) {
    if (
      error.response.data.message ===
      "Unauthorized, Your token is invalid or expired"
    ) {
      return { er: "Your token is invalid or expired, please login" };
    }
    console.log("error.response.data.message>>>", error.response.data.message);
    if (error.response.data.message === "Validation Error!") {
      NotificationManager.error(
        Object.values(error.response.data.data).join("  ")
      );
      return;
    }
    return { er: error.response.data };
  }
};
