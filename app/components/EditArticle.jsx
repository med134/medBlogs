"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import SkeletonLoadingForm from "./SkeletonLoadingForm ";
import { redirect } from "next/navigation";
import "highlight.js/styles/a11y-dark.min.css";
import { useQuill } from "react-quilljs";
import Link from 'next/link'
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";

export default function EditArticle({
  title,
  description,
  slug,
  tags,
  category,
  content,
  job,
  image,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newDescription, setNewDescription] = useState(description);
  const [newTags, setNewTags] = useState(tags);
  const [newCategory, setNewCategory] = useState(category);
  const [newSlug, setNewSlug] = useState(slug);
  const [newJob, setNewJob] = useState(job);
  const [newContent, setNewContent] = useState(content);
  const [loading, setLoading] = useState(false);
  const session = useSession();

  hljs.configure({
    languages: [
      "javascript",
      "ruby",
      "python",
      "rust",
      "java",
      "html",
      "css",
      "C",
      "C#",
    ],
  });
  const theme = "snow";
  const placeholder = "write your content...";

  const modules = {
    toolbar: [
      ["blockquote", "code-block"],
      ["bold", "italic", "underline", "strike"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["clean"],
      [{ font: [] }],
      [{ align: [] }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ],
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "color",
    "background",
  ];
  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(newContent);
    }
  }, [quill]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = newTitle;
    const description = newDescription;
    const image = newImage;
    const tags = newTags;
    const slug = newSlug;
    const category = newCategory;
    const job = newJob;
    const content = quill.root.innerHTML;

    try {
      setLoading(true);
      await fetch(`https://www.medcode.dev/api/articles/${slug}`, {
        method: "PUT",
        body: JSON.stringify({
          title,
          tags,
          image,
          description,
          slug,
          category,
          content,
          username: session.data.user.name,
          email: session.data.user.email,
          job,
        }),
      });

      setNewTitle("");
      setNewImage("");
      setNewDescription("");
      setNewTags("");
      setNewSlug("");
      setNewContent("");
      setLoading(false);
      redirect("/dashboard/add-templates");
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {loading ? (
        <SkeletonLoadingForm />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newTitle"
          >
            title
          </label>
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            id="newTitle"
            placeholder="Topic Title"
          />
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newDescription"
          >
            Description
          </label>
          <input
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            id="newDescription"
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            placeholder="Topic Description"
          />
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newSlug"
          >
            slug
          </label>
          <input
            onChange={(e) => setNewSlug(e.target.value)}
            value={newSlug}
            id="newSlug"
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            placeholder="topic slug"
          />
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newImage"
          >
            Image
          </label>
          <input
            onChange={(e) => setNewImage(e.target.value)}
            value={newImage}
            id="newImage"
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            placeholder="Topic Image"
          />
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newTags"
          >
            Tags
          </label>
          <input
            onChange={(e) => setNewTags(e.target.value)}
            value={newTags}
            id="newTags"
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            placeholder="Topic tags"
          />
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newJob"
          >
            job
          </label>
          <select
            id="newJob"
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
            className="h-12 w-full max-w-full rounded-md border px-8 bg-white text-sm outline-none focus:ring"
          >
            <option value="">Select Your jobs</option>
            <option value="Software engineer">Software engineer</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Designer">Designer</option>
            <option value="Front-end Developer">Front-end Developer</option>
            <option value="Content Creator">Content Creator</option>
            <option value="student">student</option>
          </select>
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newCategory"
          >
            Category
          </label>
          <select
            id="newCategory"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="h-12 w-full max-w-full rounded-md border px-8 bg-white text-sm outline-none focus:ring"
          >
            <option value="">Select category</option>
            <option value="react">React.js</option>
            <option value="nextjs">Next.js</option>
            <option value="career">Career</option>
            <option value="solution">Solution</option>
            <option value="productivity">Productivity</option>
            <option value="tools">Tools</option>
          </select>
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newCode"
          >
            content
          </label>
          <div ref={quillRef} style={{ height: 400, marginLeft: 4 }} />
          <div className="flex justify-start items-center"> 
          <button
            type="submit"
            className="bg-slate-600 font-bold text-white py-3 px-6 w-fit hover:bg-slate-400 rounded-lg"
          >
            Update Article
          </button>
          <Link href='/dashboard/add-articles' className="bg-slate-600 ml-3 font-bold text-white py-3 px-6 w-fit hover:bg-slate-400 rounded-lg">
            Cancel
          </Link></div>
        </form>
      )}
    </>
  );
}
