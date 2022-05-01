import axios from "axios";

export const fetchProductList = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`)
  console.log(data)
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`)
  return data;
};