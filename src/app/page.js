"use client";

import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import DaRealEmreImg from "../../public/da-real-emre.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import Card from "../components/Card";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={
      darkMode ? "dark" : ""
    }>
      <main
        className={`bg-white  px-5 sm:px-10 dark:bg-gray-900`}
      >
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-bold font-burtons dark:text-white">DaRealEmre</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode((prev) => !prev)}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 flex flex-col items-center">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              John Doe
            </h2>
            <h3 className="text-2xl dark:text-white py-2 font-medium">
              Developer and designer
            </h3>
            <p className="lg:text-lg dark:text-gray-300 text-md py-5 leading-8 md:max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              corporis, rem ad laboriosam laborum accusantium.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>

          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 sm:w-80 sm:h-80 mt-20 mx-auto overflow-hidden">
            <Image
              src={DaRealEmreImg}
              fill="fill"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center mt-5 text-center">
            <h3 className="text-3xl py-1 font-semibold text-white">Services I Offer</h3>
            <p className="lg:text-lg md:max-w-lg text-md py-2 leading-8 dark:text-gray-300 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              aspernatur saepe excepturi adipisci cumque, ea beatae assumenda
              consectetur. Lorem ipsum dolor{" "}
              <span className="text-teal-500 underline">sit amet,</span>{" "}
              consectetur adipisicing elit. Numquam aspernatur saepe excepturi
              adipisci cumque, ea beatae assumenda consectetur.
            </p>
            <p className="lg:text-lg md:max-w-lg text-md py-2 dark:text-gray-300 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              aspernatur saepe excepturi adipisci cumque, ea beatae assumenda
              consectetur.
            </p>
          </div>

          <div className="flex items-center flex-col">
            <Card image={design} />
            <Card image={consulting} />
            <Card image={code} />
          </div>
        </section>

        <section>
          <div className="flex items-center flex-col mb-20 text-justify">
            <h3 className="text-3xl py-1 text-white">Portfolio</h3>
            <p className="dark:text-gray-300 lg:text-lg md:max-w-lg text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              aspernatur saepe excepturi adipisci cumque, ea beatae assumenda
              consectetur. Lorem ipsum dolor{" "}
              <span className="text-teal-500 underline">sit amet,</span>{" "}
              consectetur adipisicing elit. Numquam aspernatur saepe excepturi
              adipisci cumque, ea beatae assumenda consectetur.
            </p>
            <p className="dark:text-gray-300 lg:text-lg md:max-w-lg text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              aspernatur saepe excepturi adipisci cumque, ea beatae assumenda
              consectetur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-10 md:p-20">
            <div className="rounded-xl overflow-hidden ">
              <Image src={web1} />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image src={web2} />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image className="h-full" src={web3} />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image src={web4} />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image className="h-full" src={web5} />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image src={web6} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
