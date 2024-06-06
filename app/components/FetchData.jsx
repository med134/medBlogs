import { notFound } from "next/navigation";

export async function getStack() {
  const res = await fetch(
    `https://api.stackexchange.com/2.3/questions?todate=1703894400&site=stackoverflow&sort=votes&order=desc`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
export async function getAll() {
  const res = await fetch(`https://www.medcode.dev/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
export async function getArticles() {
  const res = await fetch(`https://www.medcode.dev/api/articles`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  const articles = res.json();
  return articles;
}
export async function getArticle() {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search?query=software_developments`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
export async function getAllCat() {
  const res = await fetch("https://www.medcode.dev/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}
