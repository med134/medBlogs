"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { YoutubeIcons } from "./Icons";
import SliderSkelton from "./SliderSkelton";
const Youtube = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC1dm-Rczjp52egzJTL__s8A&maxResults=25&playlisId="PLagVDc72dbJaDB9svynIgBSKDvJs6LKfP"&key=AIzaSyBI7fNLL0KemPYHgO8bvsCwAKL1OMNOwAA`
        );
        const data = await response.json();
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={`p-2 py-32 sm:block xs:pt-4`}>
        <span className="flex justify-start items-center sm:mb-2">
          <p className="text-xl font-semibold text-dark dark:text-light">
            Youtube Shorts
          </p>
          <YoutubeIcons className={"ml-2"} />
        </span>
        {loading ? (
          <SliderSkelton />
        ) : (
          news?.map(
            (video, index) =>
              index < 1 && (
                <article
                  key={video.id}
                  className="flex flex-col w-44 dark:bg-dark bg-light border-2 border-red-600 rounded-md sm:mb-2"
                >
                  <Link
                    href={`https://www.youtube.com/shorts/${video.id}`}
                    target="blank"
                  >
                    <Image
                      alt={video.title}
                      width={200}
                      height={300}
                      loading="lazy"
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src={video.thumbnail}
                    />
                  </Link>
                  <div className="flex flex-col flex-1 p-6">
                    <Link
                      href="https://www.youtube.com/channel/UC1dm-Rczjp52egzJTL__s8A"
                      target="blank"
                      className="text-xs font-semibold text-gray-700 uppercase hover:underline dark:text-emerald-400"
                    >
                      {video.channelTitle}
                    </Link>
                    <h3 className="flex-1 py-2 text-xl text-gray-800 font-bold lg:text-sm sm:text-sm sm:font-semibold dark:text-light">
                      {video.title}
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span className="text-sm text-gray-700 font-semibold dark:text-light">
                        {video?.publishedAt.slice(0, 10)}
                      </span>
                      <span className="flex justify-end items-center">
                        <p className="ml-1 text-bold dark:text-light">
                          {video.views}
                        </p>
                      </span>
                    </div>
                  </div>
                </article>
              )
          )
        )}
      </div>
    </>
  );
};

export default Youtube;
