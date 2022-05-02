import axios from "axios";

// Autorizaton Header'ı eklemek için;
axios.interceptors.request.use((config) => {
  console.log(config)
  const { origin } = new URL(config.url);
  //console.log(origin) -> http://localhost:4000

  const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
  const token = localStorage.getItem("access-token");

  if (allowedOrigins.includes(origin)) {
    config.headers.authorization = token;
  }

  console.log(config)

  return config;
},

  (error) => {
    return Promise.reject(error)
  }

)

export const fetchProductList = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`)
  console.log(data)
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`)
  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`, input)
  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/me`);
  return data;
}

export const fetchLogout = async () => {
  const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`, {
    refresh_token: localStorage.getItem("refresh-token")
  });

  return data;
}