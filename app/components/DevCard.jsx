import React from "react";

const DevCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
        <div className="sm:col-span-6 lg:col-span-5">
          <a href="#">
            <div
              className="h-56 bg-cover text-center overflow-hidden"
              style={{
                backgroundImage:
                  'url("https://tailwindcss.com/img/card-left.jpg")',
              }}
              title="Woman holding a mug"
            ></div>
          </a>
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="lg:pl-16">
              <a
                href="#"
                className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Fashion
              </a>
              <a
                href="#"
                className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                The perfect summer sweater that you can wear!{" "}
              </a>
              <p className="text-gray-700 text-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-6 lg:col-span-4">
          <div className="flex items-start mb-3 pb-3">
            <a href="#" className="inline-block mr-3">
              <div
                className="w-20 h-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=)",
                }}
              ></div>
            </a>
            <div className="text-sm">
              <p className="text-gray-600 text-xs">Aug 18</p>
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
              >
                Cristiano Ronaldo of Juventus FC looks dejected during the...
              </a>
            </div>
          </div>
          <div className="flex items-start mb-3 pb-3">
            <a href="#" className="inline-block mr-3">
              <div
                className="w-20 h-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://media.gettyimages.com/photos/lionel-messi-and-marcandre-ter-stegen-of-fc-barcelona-waits-in-the-picture-id1266763488?k=6&m=1266763488&s=612x612&w=0&h=8vxz9HfQVfrff5N7d1lBVxtLamRQGK3J3lyHkUuuIiw=)",
                }}
              ></div>
            </a>
            <div className="text-sm w-2/3">
              <p className="text-gray-600 text-xs">Jan 18</p>
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
              >
                Barcelona v Bayern Munich{" "}
              </a>
            </div>
          </div>
          <div className="flex items-start mb-3 pb-3">
            <a href="#" className="inline-block mr-3">
              <div
                className="w-20 h-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=)",
                }}
              ></div>
            </a>
            <div className="text-sm">
              <p className="text-gray-600 text-xs">Aug 18</p>
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
              >
                Cristiano Ronaldo of Juventus FC looks dejected during the...
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <a href="#" className="inline-block mr-3">
              <div
                className="w-20 h-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY=)",
                }}
              ></div>
            </a>
            <div className="text-sm w-2/3">
              <p className="text-gray-600 text-xs">July 23</p>
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
              >
                Barcelona v Bayern Munich - UEFA Champions League{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="sm:col-span-12 lg:col-span-3">
          <a href="#">
            <div
              className="h-56 bg-cover text-center overflow-hidden"
              style={{
                backgroundImage:
                  'url("https://tailwindcss.com/img/card-left.jpg")',
              }}
              title="Woman holding a mug"
            ></div>
          </a>
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className>
              <a
                href="#"
                className="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Fashion
              </a>
              <a
                href="#"
                className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                The perfect summer sweater that you can wear!{" "}
              </a>
              <p className="text-gray-700 text-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
