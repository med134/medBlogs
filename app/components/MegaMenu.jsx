import React from "react";
import Link from "next/link";

const MegaMenu = () => {
  return (
    <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gradient-to-r from-cyan-900 to-cyan-700">
      <div className="w-full text-white mb-8 px-10">
        <h2 className="font-bold text-2xl">
          MedCode best Categories to see...
        </h2>
        <p>
          Explore a diverse range of projects covering various domains and
          technologies.
        </p>
      </div>
      <div className="flex w-full mx-2">
        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-r sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
          <div className="flex justify-start items-center py-2">
            <svg
              fill="#ffff"
              width="36px"
              height="36px"
              viewBox="0 0 24.00 24.00"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffff"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.144"
              />
              <g id="SVGRepo_iconCarrier">
                <title>Next.js icon</title>
                <path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z" />
              </g>
            </svg>

            <h3 className="font-bold text-xl text-white text-bold ml-2">
              Next.js
            </h3>
          </div>
          <p className="text-gray-100 text-sm">
            Next.js is a React framework for building server-rendered, see new
            articles...
          </p>
          <div className="flex items-center py-3">
            <svg
              className="h-6 pr-3 fill-current text-blue-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
            </svg>
            <Link
              href="/category/react"
              className="text-white bold border-b-2 border-blue-300 hover:text-blue-300"
            >
              Find out more...
            </Link>
          </div>
        </ul>
        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-r sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
          <div className="flex items-center py-2">
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 24.00 24.00"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              stroke="#fff"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>react</title> <rect width={24} height={24} fill="none" />{" "}
                <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" />{" "}
              </g>
            </svg>
            <h3 className="font-bold text-xl text-white text-bold ml-2">
              React.js
            </h3>
          </div>
          <p className="text-gray-100 text-sm">
            is a JavaScript library for building user interfaces, developed and
            maintained by Facebook
          </p>
          <div className="flex justify-start items-center py-3">
            <svg
              className="h-6 pr-3 fill-current text-blue-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
            </svg>
            <Link
              href="/category/nextjs"
              className="text-white bold border-b-2 border-blue-300 hover:text-blue-300"
            >
              Find out more...
            </Link>
          </div>
        </ul>
        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-r sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-5 lg:pt-3">
          <div className="flex items-center py-2">
            <svg
              width="36px"
              height="36px"
              viewBox="0 -8 72 72"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="0.00072"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: ".cls-1{fill:#ffffff;}",
                    }}
                  />
                </defs>
                <title>tools</title>
                <path
                  className="cls-1"
                  d="M13.32,44.31a4.5,4.5,0,0,0,6.36,6.36L34.44,35.91l-6.36-6.36Z"
                />
                <polygon
                  className="cls-1"
                  points="50.2 16.96 56.63 13.63 60 7.13 56.86 3.99 50.36 7.36 47.03 13.78 39.21 21.61 42.38 24.79 50.2 16.96"
                />
                <path
                  className="cls-1"
                  d="M51.61,34,51,34a8.9,8.9,0,0,0-3.11.58L29.45,16.09A8.9,8.9,0,0,0,30,13l-.06-.6A8.9,8.9,0,0,0,17.19,4.89l6,6a3,3,0,0,1,.68,1.08A3,3,0,0,1,21,16a2.92,2.92,0,0,1-1-.21,3.15,3.15,0,0,1-1.08-.67l-6-6a8.9,8.9,0,0,0,7.49,12.78L21,22a8.9,8.9,0,0,0,3.11-.58L42.6,39.84A8.9,8.9,0,0,0,42,43l.06.6A9,9,0,0,0,51,51.94a8.72,8.72,0,0,0,3.85-.9l-6-6A3.08,3.08,0,0,1,48.21,44,3,3,0,0,1,51,40a2.92,2.92,0,0,1,1,.21,2.72,2.72,0,0,1,1.08.67l6,6A8.9,8.9,0,0,0,51.61,34Z"
                />
              </g>
            </svg>

            <h3 className="font-bold text-xl text-white text-bold ml-2">
              Tools
            </h3>
          </div>
          <p className="text-gray-100 text-sm">
            This proposal is a win-win situation which will cause a stellar
            paradigm shift
          </p>
          <div className="flex items-center py-3">
            <svg
              className="h-6 pr-3 fill-current text-blue-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
            </svg>
            <Link
              href="/category/tools"
              className="text-white bold border-b-2 border-blue-300 hover:text-blue-300"
            >
              Find out more...
            </Link>
          </div>
        </ul>
        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
          <div className="flex items-center py-2">
            <svg
              fill="#fff"
              width="36px"
              height="36px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title />{" "}
                <g id="Productivity">
                  {" "}
                  <path d="M12,22H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,12,22ZM11,46H5V24h6Z" />{" "}
                  <path d="M26,16H18a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V17A1,1,0,0,0,26,16ZM25,46H19V18h6Z" />{" "}
                  <path d="M41,31V27a1,1,0,0,0-1-1H32a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h6.25V46H33V28h6v3Z" />{" "}
                  <path d="M47,13h6V29.6h2V12a1,1,0,0,0-1-1H46a1,1,0,0,0-1,1V28.17h2Z" />{" "}
                  <path d="M51,33A10,10,0,1,0,61,43,10,10,0,0,0,51,33Zm3.29,14.71-4-4A1,1,0,0,1,50,43V37h2v5.59l3.71,3.7Z" />{" "}
                </g>{" "}
              </g>
            </svg>

            <h3 className="font-bold text-xl text-white text-bold ml-2">
              Productivity
            </h3>
          </div>
          <p className="text-gray-100 text-sm">
            This is a no-brainer to wash your face, or we need to future-proof
            this high performance keywords granularity.
          </p>
          <div className="flex items-center py-3">
            <svg
              className="h-6 pr-3 fill-current text-blue-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
            </svg>
            <Link
              href="/category/productivity"
              className="text-white bold border-b-2 border-blue-300 hover:text-blue-300"
            >
              Find out more...
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
