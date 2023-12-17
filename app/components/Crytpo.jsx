"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "../loading";

const Crypto = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchSeoData = async () => {
      const url =
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1813cb997bmsh2a47f326c30f6a0p166fd4jsnd62e31fba852",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setNews(result.data.coins);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchSeoData();
  }, []);

  return (
    <>
      <span className="text-xl font-semibold mb-8 text-gray-800 font-lexend rounded-lg sm:text-sm xl:text:sm dark:text-light">
        Best Hardware Wallets-Crypto Prices (USD)
      </span>
      <div className="bg-white rounded-md mt-4 border border-b-red-500 mb-6 dark:bg-dark dark:border-light">
        {loading ? (
          <Loading />
        ) : (
          news?.map(
            (post, index) =>
              index < 6 && (
                <div
                  key={post.uuid}
                  className={`${
                    index === 0
                      ? "bg-yellow-400 flex justify-between items-center p-4 w-full sm:p-4"
                      : "flex justify-between p-4 w-full xl:p-4 rounded-lg sm:p-4 dark:text-light"
                  }`}
                >
                  <Link
                    href={post.coinrankingUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center"
                  >
                    <span className="px-3 text-xl font-bold sm:text-sm xl:px-1 xl:text-xs dark:text-light">
                      {index + 1}
                    </span>
                    <img
                      className="rounded-[50%] w-8 h-8 xs:w-6 xs:h-6"
                      src={post.iconUrl}
                      alt="crypto_icons"
                    />
                    <span className="text-[13px] font-semibold text-gray-900 px-8 uppercase dark:text-light xl:text-xs xl:px-1 xs:px-2">
                      {post.name}
                    </span>
                  </Link>
                  <p className="text-[13px] font-semibold p-1 flex xl:text-xs">
                    {post.price.slice(0, 10)}{" "}
                    <span className="text-yellow-400">$ </span>
                  </p>
                  <p
                    className={`${
                      post.change < 0
                        ? "text-red-500 font-semibold text-[13px] xl:text-xs"
                        : `text-green-500 font-semibold text-[13px] xl:text-xs`
                    }`}
                  >
                    {post.change} %
                  </p>
                </div>
              )
          )
        )}
      </div>
    </>
  );
};

export default Crypto;
