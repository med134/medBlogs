"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { motion, useMotionValue } from "framer-motion";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        width={40}
        className="z-10 w-[100%] h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({
  img,
  title,
  type,
  summary,
  link,
  react,
  comment,
  reading,
}) => {
  return (
    <article
      className="w-full h-[240px] lg:h-[420px] flex items-center justify-between relative  rounded-br-xl
      rounded-3xl border border-solid border-borderColor bg-light shadow-sm p-12 dark:bg-dark dark:border-light
      lg:flex-col lg:p-4 xl:p-4 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
  rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
  "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          width={100}
          height={200}
          priority
          sizes={200}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between pl-8 lg:w-full lg:pl-0 lg:pt-6">
        <div className="inline-flex ">
          <span className="text-primary text-sm font-semibold dark:text-primaryDark xs:text-base uppercase">
            {type}
          </span>
          <p className="flex absolute top-0 right-0 p-6 font-lexend lg:hidden">
            {reading}
          </p>
        </div>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-1 w-full text-left text-[17px] font-bold dark:text-light lg:text-xl xs:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-1 text-sm font-lexend text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex justify-between">
          <div className="rounded-lg flex">
            <span className="mr-2 font-semibold">By</span>{" "}
            <Image
              src="https://i.ibb.co/mSjZwpw/download.png"
              alt="user"
              width={52}
              height={52}
              className="lg:w-6 xl:w-6 xl:h-6 md:w-6 md:h-6"
            />{" "}
            <Link href="/about" className="font-semibold underline ml-2">
              medcode
            </Link>
          </div>
          <div className="inline-flex text-center lg:ml-20 2xl:ml-[70%] xl:ml-[39%] text-gray-600">
            <p className="inline-flex px-3 font-bold">
              <AiOutlineComment fontSize={24} /> {react}
            </p>
            <p className="inline-flex font-bold">
              <AiOutlineHeart fontSize={24} />
              {comment}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

const Article = () => {
  const [blog, setBlogs] = useState([]);
  const [trends, setTrends] = useState([]);
  const [subscriberCount, setSubscriberCount] = useState();
  const [videoCount, setVideoCount] = useState([]);
  const getData = () => {
    const key = "AIzaSyBI7fNLL0KemPYHgO8bvsCwAKL1OMNOwAA";
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC1dm-Rczjp52egzJTL__s8A&key=AIzaSyBI7fNLL0KemPYHgO8bvsCwAKL1OMNOwAA`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const base = data.items[0].statistics;
        setSubscriberCount(base.subscriberCount);
        setVideoCount(base.videoCount);
        console.log("youtube", data);
      });
  };

  const fetchData = () => {
    const url = "https://reddit-coder-news.p.rapidapi.com/newsfeed";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1813cb997bmsh2a47f326c30f6a0p166fd4jsnd62e31fba852",
        "X-RapidAPI-Host": "reddit-coder-news.p.rapidapi.com",
      },
    };

    try {
      const response = fetch(url, options);
      const result = response.json();
      console.log("api",result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="grid grid-cols-3 p-12  gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-32 rounded-lg bg-gray-200" />
      <div className="h-32 rounded-lg bg-gray-200" />
      <div className="h-32 rounded-lg bg-gray-200" />
      <div className="h-32 rounded-lg bg-gray-200" />
    </section>
  );
};
export default Article;
