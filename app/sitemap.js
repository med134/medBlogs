import { getAll, getAllCat, getArticles } from "./components/FetchData";
import routes from "./routes.json";

export default async function sitemap() {
  const posts = await getAll();
  const blogs = await getArticles();
  const categories = await getAllCat();
  const baseUrl = "https://medcode.dev";
  const staticUrls = routes.map((route) => {
    return {
      url: `${baseUrl}${route.url}`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: "weekly",
    };
  });
  const AllPosts = posts.map((item) => {
    return {
      url: `${baseUrl}/templates/${item.slug}`,
      lastModified: new Date().toISOString(),
      priority: 0.5,
      changeFrequency: "monthly",
    };
  });
  const AllBlogs = blogs.map((item) => {
    return {
      url: `${baseUrl}/blogs/${item.slug}`,
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: "daily",
    };
  });
  const allCategories = categories.map((cat) => {
    return {
      url: `${baseUrl}/category/${cat.value}`,
      lastModified: new Date().toISOString(),
    };
  });

  return [...staticUrls, ...AllPosts, ...AllBlogs, ...allCategories];
}
