import { getProjects, getProjectsMini } from "@/app/components/ProjectArrays";
import ShareButtons from "@/app/components/ShareButtons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";

const page = async ({ params }) => {
  const { slug } = params;
  const project = await getProjects(slug);
  const miniProject = await getProjectsMini(slug);
  return (
    <div className="w-full rounded-lg bg-light p-10 flex flex-col justify-center items-center sm:p-6">
      <div className="bg bg-white shadow mt-28 rounded-lg p-10 max-w-4xl">
        <div className="flex justify-center items-center">
          {/* Image Placeholder */}
          <Image
            src={project?.image || miniProject.image}
            alt={project?.title || miniProject?.title}
            className="rounded-lg shadow-lg w-full h-full"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-5 gap-6 md:flex md:flex-col">
          <div className="col-span-3 p-4 flex md:flex md:flex-col">
            <div>
              {" "}
              <h1 className="text-2xl font-bold text-gray-900 mb-3 sm:mb-0">
                {project?.title || miniProject?.title}
              </h1>
              <div className="flex space-x-4">
                <ShareButtons />
              </div>
              <p className="text-gray-700">{project?.summary || miniProject?.summary}</p>
            </div>
            <div className="h-56 w-[1px] bg-gray-400 col-span-1 md:hidden"></div>
            <div className="h-[1px] w-full bg-gray-400 col-span-1 mt-4 hidden md:flex"></div>
          </div>

          <div className="col-span-2">
            <div className="mt-3 text-mainColor">
              Compatible Browsers :{" "}
              <span className="text-gray-700">
                Firefox, Safari, Opera, Chrome, Edge
              </span>
            </div>
            <div className="mt-3 text-mainColor">
              technology :{" "}
              <span className="text-gray-700">{project?.technology || miniProject?.technology}</span>
            </div>
            <div className="text-gray-700 text-left mt-4 text-xl font-semibold">
              Contact me for code source
            </div>
            <div className="w-full flex justify-around items-start mt-2 sm:mb-2">
              <a
                href={"whatsapp://send?text=Hello!&phone=+212600462196"}
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label={"whatsapp contact"}
                name={"whatsapp contact"}
                className={
                  "flex items-center relative rounded-md px-16 py-1.5 border-2 border-green-600 text-light bg-green-600 text-2xl hover:text-white hover:bg-green-600"
                }
              >
                <div className="absolute z-10 top-0 left-0 w-max h-8 bg-[#25d366] animate-ping"></div>
                <FaWhatsapp className="h-7 w-7" />
                <span className="ml-4">whatsapp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
