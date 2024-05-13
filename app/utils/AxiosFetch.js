/* eslint-disable import/no-anonymous-default-export */
const { default: axios } = require("axios");

const apiUrl = "http://localhost:3000/api";

// api tokens options
const axiosClient = axios.create({
  baseURL: apiUrl,
});
// fetch All Products
const getAllArticles = () => axiosClient.get("/blog");
// fetch Single product
const getBlogBySlug = async (slug) => {
  /*  const headers = {
    Authorization: `Bearer ${apiKey}`,
  }; */
  const response = await fetch(`${apiUrl}/blog/${slug}`);
  const data = await response.json();
  console.log("single post", data);
  return data;
};

export default { getAllArticles, getBlogBySlug };
