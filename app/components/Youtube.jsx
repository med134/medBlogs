"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import YoutubeSkeleton from "./YoutubeSkeleton";
import { YoutubeIcons } from "./Icons";
const Youtube = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1dm-Rczjp52egzJTL__s8A&maxResults=100&key=AIzaSyAuEMjkPWP_APLS7wgW4mLQiGF3W9y7bkE`
        );

        const data = await response.json();

        if (data.items) {
          const videoIds = data.items.map((video) => video.id.videoId);
          const videoStatsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds.join(
            ","
          )}&key=AIzaSyAuEMjkPWP_APLS7wgW4mLQiGF3W9y7bkE`;

          const statsResponse = await fetch(videoStatsUrl);
          const statsData = await statsResponse.json();

          if (statsData.items) {
            const videoData = data.items.map((video, index) => {
              const statistics = statsData.items[index]?.statistics;
              return {
                id: video.id.videoId,
                channelTitle: video.snippet.channelTitle,
                title: video.snippet.title,
                thumbnail: video.snippet.thumbnails.high.url,
                publishedAt: video.snippet.publishedAt,
                views: statistics ? statistics.viewCount : 0,
              };
            });

            const sortedVideos = videoData.sort(
              (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
            );

            setNews(sortedVideos);
            setLoading(false);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-2 sm:block">
        <span className="flex justify-start items-center sm:mb-2">
          <p className="text-xl font-semibold text-dark dark:text-light">Youtube Shorts</p>
          <YoutubeIcons className={"ml-2"} />
        </span>
        {loading ? (
          <YoutubeSkeleton />
        ) : (
          news?.map(
            (video, index) =>
              index < 3 && (
                <article
                  key={video.id}
                  className="flex flex-col w-full dark:bg-dark bg-white border-2 border-red-600 rounded-md sm:mb-2"
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
      {news.length > 0 && (
        <Link
          href="https://www.youtube.com/channel/UC1dm-Rczjp52egzJTL__s8A"
          target="blank"
          className="flex justify-center items-center"
        >
          <span className="text-center text-xl sm:text-sm text-gray-700 dark:text-light hover:bg-red-600 rounded-md hover:text-light border border-gray-600 px-20 py-1 w-full dark:border-light">
            show moore...
          </span>
        </Link>
      )}
    </>
  );
};

export default Youtube;
