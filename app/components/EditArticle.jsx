"use client";
import { useState, useEffect, useRef } from "react";
import "jodit-react/examples/app.css";
import SkeletonLoadingForm from "./SkeletonLoadingForm ";
import Link from "next/link";
import IsUpdate from "./IsUpdate";
import { useRouter } from "next/navigation";
import JoditEditor from "jodit-react";

export default function EditArticle({
  title,
  description,
  slug,
  tags,
  category,
  content,
  job,
  image,
  status,
  userName,
  UserEmail,
  session,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newDescription, setNewDescription] = useState(description);
  const [newStatus, setStatus] = useState(status);
  const [newTags, setNewTags] = useState(tags);
  const [newCategory, setNewCategory] = useState(category);
  const [newSlug, setNewSlug] = useState(slug);
  const [newJob, setNewJob] = useState(job);
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const router = useRouter();
  const TITLE_MODAL = "Updated";
  const DESC_MODAL = "Your Article is Updated Now !";
  const handelUpdate = () => {
    setIsUpdate(!isUpdate);
    router.push("/dashboard/blogs");
  };
  /* JoditEditor */
  const editor = useRef(null);
  const [myContent, setMyContent] = useState(content);
  const [config, setConfig] = useState({
    readonly: false,
    height: 600,
    toolbar: true,
    zIndex: 0,
  });
  useEffect(() => {
    setMyContent(myContent);
  }, [myContent]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const tags = e.target[1].value;
    const image = e.target[2].value;
    const description = e.target[3].value;
    const slug = e.target[4].value;
    const category = newCategory;
    const job = newJob;
    const status = newStatus;
    const content = myContent;
    const username = userName;
    const email = UserEmail;

    try {
      setLoading(true);
      await fetch(`/api/articles/${slug}`, {
        method: "PUT",
        body: JSON.stringify({
          title,
          tags,
          image,
          description,
          slug,
          category,
          job,
          status,
          content,
          username,
          email,
        }),
      });
      setLoading(false);
      setIsUpdate(true);
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
          <div className="grid grid-cols-2 gaps-10 lg:block">
            <div className="p-4">
              <label
                className="text-gray-600 font-bold mb-1 dark:text-light"
                htmlFor="newTitle"
              >
                title
              </label>
              <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="border w-full border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                id="newTitle"
                placeholder="Topic Title"
              />
            </div>
            <div className="p-4">
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
                className="border w-full border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="Topic tags"
              />
            </div>
            <div className="p-4">
              <label
                className="text-gray-600 font-bold  dark:text-light"
                htmlFor="newImage"
              >
                Image
              </label>
              <input
                onChange={(e) => setNewImage(e.target.value)}
                value={newImage}
                id="newImage"
                className="border w-full border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="Topic Image"
              />
            </div>
            <div className="p-4">
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
                className="border w-full border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="Topic Description"
              />
            </div>
            <div className="p-4">
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
                className="border w-full border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="topic slug"
              />
            </div>

            <div>
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
                className="h-12 w-full max-w-full py-2 rounded-md border px-8 bg-white text-sm outline-none focus:ring"
              >
                <option value="">Select category</option>
                <option value="react">React.js</option>
                <option value="nextjs">Next.js</option>
                <option value="career">Career</option>
                <option value="solution">Solution</option>
                <option value="productivity">Productivity</option>
                <option value="tools">Tools</option>
              </select>
            </div>

            <div className="p-4">
              <label className="text-gray-600 font-bold mb-1 dark:text-light">
                job
              </label>
              <div className="">
                <select
                  value={newJob}
                  onChange={(e) => setNewJob(e.target.value)}
                  className="h-11 w-full max-w-full rounded-md border px-8 py-2 bg-white text-sm outline-none focus:ring"
                >
                  <option value="">Select Your jobs</option>
                  <option value="Software engineer">Software engineer</option>
                  <option value="Software Developer">Software Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Front-end Developer">
                    Front-end Developer
                  </option>
                  <option value="Content Creator">Content Creator</option>
                  <option value="student">student</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-gray-600 ml-4 font-bold mb-1 dark:text-light">
                Status
              </label>
              <select
                value={newStatus}
                disabled={
                  session?.user?.name === "MOHAMMED DAKIR" ? false : true
                }
                onChange={(e) => setStatus(e.target.value)}
                className="h-12 w-full max-w-full rounded-md border ml-4 mb-1 bg-white px-5 text-sm outline-none focus:ring"
              >
                <option className="py-2" value="draft">
                  Draft
                </option>
                <option value="publish" className="py-2">
                  publish
                </option>
              </select>
            </div>
          </div>
          {isUpdate && (
            <IsUpdate
              onClose={handelUpdate}
              title={TITLE_MODAL}
              desc={DESC_MODAL}
            />
          )}
          <label
            className="text-gray-600 font-bold mb-1 dark:text-light"
            htmlFor="newCode"
          >
            content
          </label>
          <div>
            <JoditEditor
              ref={editor}
              config={config}
              value={myContent}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setMyContent(newContent)} // Update content on blur
              onChange={(newContent) => setMyContent(newContent)}
            />
          </div>
          <div className="flex justify-start items-center">
            <button
              type="submit"
              className="bg-slate-600 font-bold text-white py-3 px-6 w-fit hover:bg-slate-400 rounded-lg"
            >
              Update Article
            </button>
            <Link
              href="/dashboard/add-articles"
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
