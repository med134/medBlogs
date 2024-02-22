import { NotFoundIcon } from "./Icons";

const NotFoundModel = ({ onClose }) => {
  return (
    <div className="absolute w-96 mt-36 z-[9999] flex justify-center items-center h-60 ml-[35%] md:ml-[20%] xs:ml-12 xs:w-72  p-6 rounded-lg shadow-lg bg-white inset-0 px-4 text-center sm:inline-block sm:p-0">
      <div className="inline-block items-center justify-center">
        <div className="flex justify-center items-center">
          <NotFoundIcon className="w-12 h-12 sm:mt-2" />
        </div>
        <span className="inline-block text-xl font-normal text-gray-800 mt-5 mb-6 xs:text-sm">
          Your keywords search not found. Please close and try again!!
        </span>
        <div className="flex justify-center items-center">
          <button
            aria-labelledby="close"
            name="close"
            onClick={onClose}
            className=" text-white bg-red-600 sm:mb-4 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-3 py-2.5 text-center mr-2"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFoundModel;
