/* eslint-disable import/no-anonymous-default-export */
const { default: axios } = require("axios");

const apiUrl = "https://www.medcode.dev/api";

// api tokens options
const axiosClient = axios.create({
  baseURL: apiUrl,
});
// fetch All Products
const getBlog = async () => {
  const response = await fetch(`${apiUrl}/blog`);
  const data = await response.json();
  return data;
};
// fetch Single product
const getBlogBySlug = async (slug) => {
  const response = await fetch(`${apiUrl}/blog/${slug}`);
  const data = await response.json();
  return data;
};

export default { getBlogBySlug, getBlog };
