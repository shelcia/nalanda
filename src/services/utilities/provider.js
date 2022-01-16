// provider.js

import axios from "axios";
import { handleResponse, handleError } from "./response";
import { LOCALHOST_URL } from "../api";
// console.log(AWS_BASE_URL);

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
// const BASE_URL = MOCKAPI_BASE_URL;
const BASE_URL = LOCALHOST_URL;

/** @param {string} resource */
const getAll = async (resource, signal, isAuthorized = false) => {
  const token = localStorage.getItem("HRT-Token");

  const headers = isAuthorized ? { Authorization: `Bearer ${token}` } : {};

  try {
    const response = await axios.get(`${BASE_URL}/${resource}`, {
      signal: signal,
      headers: headers,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {string} id */
/** @param {string} additionalParam */
const getSingle = async (
  resource,
  id,
  signal,
  additionalParam = "",
  isAuthorized = false
) => {
  const token = localStorage.getItem("HRT-Token");

  const headers = isAuthorized ? { Authorization: `Bearer ${token}` } : {};

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.get(`${BASE_URL}/${resource}/${id}`, {
        signal: signal,
        headers: headers,
      });
    } else {
      // console.log(`${BASE_URL}/${resource}/${additionalParam}/${id}`);
      response = await axios.get(
        `${BASE_URL}/${resource}/${additionalParam}/${id}`,
        {
          signal: signal,
          headers: headers,
        }
      );
    }
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {string} params */
const getByParams = async (resource, params, signal, isAuthorized = false) => {
  const token = localStorage.getItem("HRT-Token");
  try {
    const response = await axios.get(`${BASE_URL}/${resource}?${params}`, {
      signal: signal,
      headers: {
        "auth-token": token,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */
const post = async (
  resource,
  model,
  additionalParam = "",
  isAuthorized = false
) => {
  // console.log({ model });
  const token = localStorage.getItem("HRT-Token");
  const headers = isAuthorized ? { Authorization: `Bearer ${token}` } : {};

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.post(`${BASE_URL}/${resource}`, model, {
        headers: headers,
      });
    } else {
      response = await axios.post(
        `${BASE_URL}/${resource}/${additionalParam}`,
        model,
        {
          headers: headers,
        }
      );
    }
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */

const postFormData = async (
  resource,
  model,
  additionalParam,
  isAuthorized = false
) => {
  const token = localStorage.getItem("HRT-Token");
  console.log("invoked");
  const headers = isAuthorized
    ? {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    : { "Content-Type": "multipart/form-data" };

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.post(`${BASE_URL}/${resource}`, model, {
        headers: headers,
      });
    } else {
      response = await axios.post(
        `${BASE_URL}/${resource}/${additionalParam}`,
        model,
        {
          headers: headers,
        }
      );
    }
    console.log(await response);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */
const put = async (resource, model, signal, isAuthorized = false) => {
  try {
    const response = await axios.put(`${BASE_URL}/${resource}`, model, {
      signal: signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */
const putById = async (resource, id, model, signal, isAuthorized = false) => {
  try {
    const response = await axios.put(`${BASE_URL}/${resource}/${id}`, model, {
      signal: signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */
const patch = async (resource, model, signal, isAuthorized = false) => {
  const token = localStorage.getItem("HRT-Token");
  try {
    const response = await axios.patch(`${BASE_URL}/${resource}`, model, {
      signal: signal,
      headers: {
        "auth-token": token,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {string} id */
const remove = async (resource, id, signal, isAuthorized = false) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${resource}`, id, {
      signal: signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const apiProvider = {
  getAll,
  getSingle,
  getByParams,
  post,
  postFormData,
  put,
  putById,
  patch,
  remove,
};
