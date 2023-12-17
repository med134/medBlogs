"use client";
import React from "react";
import { LinkArrow } from "./Icons";
import profilePic from "../images/med12.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dancing_Script } from "next/font/google";
const dance = Dancing_Script({ subsets: ["latin"] });
const HomeComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const childVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    duration: 2,
  };
  const parentVariants = {
    visible: {
      transition: {
        when: "beforeChildren", // Stagger children animation before parent
        staggerChildren: 0.4, // Delay between each child
      },
    },
  };
  return (
    <div className="flex items-center justify-between w-full lg:flex-col">
      <div ref={ref} className="w-1/2 md:w-full">
        <motion.div
          initial={{ x: -700}} // Initial state with 0 opacity and scale
          animate={{ x: inView ? 0 : -100}} // Animate when in view
          transition={{
            type: "bezier",
            duration: 0.2,
            easing: [0.42, 0, 0.58, 1],
          }} // Use spring transition
        >
          <Image
            src={profilePic}
            alt="developer_image"
            className="w-[600px] mb-10 h-auto ml-10 md:inline-block md:w-full sm:ml-2"
            priority
            width={500}
            height={300}
            properly="true"
          />
        </motion.div>
      </div>
      <div
        ref={ref}
        className="w-1/2 flex flex-col self-center lg:w-full lg:text-center sm:mt-[-50px]"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={parentVariants}
        >
          <motion.div variants={childVariants}>
            <div className="container xs:mb-4">
              <div className="row">
                <div className="col-md-12 text-left lg:text-center">
                  <span
                    className={`${dance.className} animate-charcter font-dance text-4xl md:text-center font-bold lg:text-center`}
                  >
                    Hi My Name is Med, Im a Software Developer 
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={childVariants}>
            <p
              className="text-6xl text-left 
                xl:text-5xl lg:text-center lg:text=6xl md:text-5xl sm:text-3xl"
            >
              Turning Vision Into Reality With{" "}
              <span className="code">Code</span> And{" "}
              <span className="design"> Design.</span>
            </p>
          </motion.div>
          <motion.div variants={childVariants}>
            <p className="my-4 text-base font-lexend font-semibold md:text-sm sm:text-sm xs:text-sm">
              As a skilled freelance web developer, I am dedicated to turning
              ideas into innovative web applications, specializing in web design
              and e-commerce website development. Explore my latest projects,
              blogs, and free templates & components, showcasing my expertise in
              web development and mobile applications
            </p>
          </motion.div>
          <motion.div variants={childVariants}>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/about"
                className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                href="https://www.vivacode.dev/contactMe/"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeComponent;
