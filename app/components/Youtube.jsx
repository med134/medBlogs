/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";
import axios from "axios";
import { YoutubeImage } from "./Icons";
import Loading from "../loading";

const Youtube =  () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchSeoData = async () => {
      setLoading(true);
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1dm-Rczjp52egzJTL__s8A&maxResults=100&key=AIzaSyAuEMjkPWP_APLS7wgW4mLQiGF3W9y7bkE`;
      axios
        .get(url)
        .then((response) => {
          if (response.data.items) {
            const videoIds = response.data.items.map(
              (video) => video.id.videoId
            );
            const videoStatsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds.join(
              ","
            )}&key=AIzaSyAuEMjkPWP_APLS7wgW4mLQiGF3W9y7bkE`;

            axios
              .get(videoStatsUrl)
              .then((statsResponse) => {
                if (statsResponse.data.items) {
                  const videoData = response.data.items.map((video, index) => {
                    const statistics =
                      statsResponse.data.items[index]?.statistics;
                    return {
                      id: video.id.videoId,
                      channelTitle: video.snippet.channelTitle,
                      title: video.snippet.title,
                      channelTitle: video.snippet.channelTitle,
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
              })
              .catch((error) => {
                console.error("Error fetching video statistics:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error fetching videos:", error);
        });
    };
    fetchSeoData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-3 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-2 sm:block">
        
        {loading ? (
          <Loading />
        ) : (
          news?.map(
            (video, index) =>
              index < 6 && (
                <article
                  key={video.id}
                  className="flex flex-col w-full dark:bg-dark bg-white border-2 border-red-600 rounded-md sm:mb-2"
                >
                  <Link
                    href={`https://www.youtube.com/shorts/${video.id}`}
                    target="blank"
                  >
                    <img
                      alt={video.title}
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src={video.thumbnail}
                    />
                  </Link>
                  <div className="flex flex-col flex-1 p-6">
                    <Link
                      href="https://www.youtube.com/@VivaCode99"
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
                        <IoEyeSharp className="w-4 h-4 text-gray-700 dark:text-light" />
                        <p className="ml-1 text-bold dark:text-light">{video.views}</p>
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
