import axios from "axios";
import { API_URL } from "./Config";

export const list = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`, {});
    return response.data;
  } catch (error) {
    return HandleApiError(error);
  }
};

export const single = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`, {});
    return response.data;
  } catch (error) {
    return HandleApiError(error);
  }
};

export const create = async (id, title, price, description, category, image) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`, {
      id: 0,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
    });
    return response.data;
  } catch (error) {
    return HandleApiError(error);
  }
};

export const update = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`, { method: "DELETE" });
    return response.data;
  } catch (error) {
    return HandleApiError(error);
  }
};

// for example
// export const remove = async (id) => {
//   try {
//     const response = await axios.post(`${API_URL}/products/remove`, {id});
//     return response.data;
//   } catch (error) {
//     return HandleApiError(error);
//   }
// };

const HandleApiError = (error) => {
  if (error.response && error.response.data) {
    return error.response.data;
  }

  return {
    success: false,
    message: "خطای سرور",
  };
};
