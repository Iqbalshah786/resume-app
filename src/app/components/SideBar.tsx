"use client";
import profile from "../../../public/images/db.jpeg";
import Image from "next/image";
import Contact from "./Contact";
import { useState } from "react";
import { contacts } from "../../../data/data";
export default function SideBar({}) {
  return (
    <>
      <aside className={`w-full h-full  py-16 text-white`}>
        <div className="w-full h-auto  flex flex-col  items-center gap-4  justify-center">
          <div className="name text-center flex flex-col gap-4 mt-12">
            <Image
              src={profile}
              alt="profile picture"
              width={300}
              height={300}
              className="rounded-full"
            />
            <div>
              <h1 className="my-4 text-[#fff734] text-[56px]">John Doe</h1>
              <h2 className=" text-2xl">Software Engineer</h2>
            </div>
          </div>

          <div className="education px-8 ">
            <p className="my-4">
              Bachelor of Science in Computer Science, University of
              Oxford(2015-2019)
            </p>
            <p>
              Master of Science in Artificial Intelligence, Imperial College
              London (2019-2021)
            </p>
          </div>
          <div className="contact mt-8">
            <Contact contacts={contacts} />
          </div>
        </div>
      </aside>
    </>
  );
}
