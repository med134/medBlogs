export default function HeroLoading() {
  return (
    <div className="flex justify-between items-start space-y-8 p-6 animate-pulse md:space-y-0 md:space-x-8 md:flex-wrap-reverse xs-space-x-0 xs:p-2 xs:mt-2">
      <div className="w-full mt-4 p-6 xs:p-2">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-82 mb-8" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
        <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[300px]" />
        <div className="h-8 bg-gray-200 mt-4 rounded-sm dark:bg-gray-700 w-28" />
      </div>
      <div className="flex items-center justify-center p-6 w-full xs:w-72 h-56 bg-gray-300 rounded dark:bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-700 dark:text-gray-100"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  );
}
