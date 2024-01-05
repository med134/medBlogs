"use client";
import { useEffect, useState } from "react";

export default function AlertBar() {
  const [youtube, setYoutube] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1dm-Rczjp52egzJTL__s8A&maxResults=100&key=AIzaSyAuEMjkPWP_APLS7wgW4mLQiGF3W9y7bkE"
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutube(data.items);
        console.log("array", youtube);
      });
  }, []);
  return (
    <div
      className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <span className="font-medium">Success alert!</span> Your Component Added
      Successfully
    </div>
  );
}
