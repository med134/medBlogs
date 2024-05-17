"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import SkeletonLoadingForm from "./SkeletonLoadingForm ";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function EditPost({
  title,
  description,
  category,
  slug,
  code,
  link,
  image,
  job,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newSlug, setNewSlug] = useState(slug);
  const [newDescription, setNewDescription] = useState(description);
  const [newLink, setNewLink] = useState(link);
  const [newCategory, setNewCategory] = useState(category);
  const [newCode, setNewCode] = useState(code);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const [selectedJobs, setSelectedJobs] = useState(job);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = newTitle;
    const description = newDescription;
    const image = newImage;
    const slug = newSlug;
    const link = newLink;
    const category = newCategory;
    const code = newCode;
    console.log(newTitle);
    try {
      setLoading(true);
      await fetch(`https://www.medcode.dev/api/posts/${slug}`, {
        method: "PUT",
        body: JSON.stringify({
          title,
          description,
          slug,
          image,
          link,
          category,
          job,
          code,
          username: session.data.user.name,
          email: session.data.user.email,
        }),
      });

      setNewTitle("");
      setNewImage("");
      setNewSlug("");
      setNewDescription("");
      setNewLink("");
      setNewCategory("");
      setNewCode("");
      setLoading(false);
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  const handleJobs = (event) => {
    setSelectedJobs(event.target.value);
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
            htmlFor="newSlug"
          >
            Slug
          </label>
          <input
            onChange={(e) => setNewSlug(e.target.value)}
            value={newSlug}
            id="newSlug"
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            placeholder="Topic Slug"
          />
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newLink"
          >
            Link
          </label>
          <input
            onChange={(e) => setNewLink(e.target.value)}
            value={newLink}
            id="newLink"
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            placeholder="Topic Link preview"
          />
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newCategory"
          >
            Category
          </label>
          <input
            onChange={(e) => setNewCategory(e.target.value)}
            value={newCategory}
            id="newCategory"
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            placeholder="Topic category"
          />
          <select
            id="selectChoice"
            value={selectedJobs}
            onChange={handleJobs}
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-2 text-sm outline-none focus:ring"
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
            htmlFor="newCode"
          >
            Code
          </label>
          <div className="w-full">
            <SyntaxHighlighter
              language="jsx"
              style={dracula}
              className="rounded-lg mb-4 h-[400px]"
            >
              {newCode}
            </SyntaxHighlighter>
            <p className="text-xl sm:text-sm text-gray-700 dark:text-light font-semibold underline">
              change your code from text bellow
            </p>
            <textarea
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
              rows={10}
              style={{
                width: "100%",
                height: "400px",
                backgroundColor: "#282a36",
                color: "#ffff",
                marginTop: "10px",
              }}
            />
          </div>
          <div className="flex justify-items-start items-center">
            <button
              type="submit"
              className="bg-slate-600 font-bold text-white py-3 px-6 w-fit hover:bg-slate-400 rounded-lg"
            >
              Update Post
            </button>
            <Link
              href="/dashboard/add-templates"
              className="bg-slate-600 ml-3 font-bold text-white py-3 px-6 w-fit hover:bg-slate-400 rounded-lg"
            >
              Cancel
            </Link>
          </div>
        </form>
      )}
    </>
  );
}
