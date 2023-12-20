import { getAll, getAllCat, getArticles } from "./components/FetchData";
import routes from "./routes.json";


export default async function sitemap() {
  const posts = await getAll()
  const blogs = await getArticles()
  const categories = await getAllCat();
  const baseUrl = "https://medcode.dev";
  const staticUrls = routes.map((route) => {
    return {
      url: `${baseUrl}${route.url}`,
      lastModified: new Date().toISOString(),
    };
  });
  const AllPosts = posts.map((item) => {
    return {
      url: `${baseUrl}/templates/${item._id}`,
      lastModified: new Date().toISOString(),
    };
  });
  const AllBlogs = blogs.map((item) => {
    return {
      url: `${baseUrl}/blogs/${item._id}`,
      lastModified: new Date().toISOString(),
    };
  });
  const allCategories = categories.map((cat) => {
    return {
      url: `${baseUrl}/category/${cat.value}`,
      lastModified: new Date().toISOString(),
    };
  });

  return [...staticUrls, ...AllPosts, ...AllBlogs,...allCategories];
}
