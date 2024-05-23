/* eslint-disable import/no-anonymous-default-export */
const { default: axios } = require("axios");

const apiUrl = "https://www.medcode.dev/api";

// api tokens options
const axiosClient = axios.create({
  baseURL: apiUrl,
});
// fetch All Products
const getBlog = async () => axiosClient.get(`/blog`);
// fetch Single product
const getBlogBySlug = async (slug) => {
  const response = await fetch(`https://www.medcode.dev/api/blog/${slug}`);
  const data = await response.json();
  console.log("single post",data)
  return data;
};

export default { getBlogBySlug, getBlog };
