"use client";
import profile from "../../../public/images/db.jpeg";
import Image from "next/image";
import Contact from "./Contact";
import { Menu } from "lucide-react";

export default function SideBar() {
  return (
    <>
      <div className="menu z-1 absolute top-4 left-4 md:hidden">
        <Menu />
      </div>
      <aside className="hidden relative w-[50vw] md:flex flex-col items-center justify-center">
        <div className="w-full h-auto bg-blue-500 flex flex-col  items-center justify-center">
          <div className="name text-center flex flex-col gap-4">
            <Image
              src={profile}
              alt="profile picture"
              width={300}
              height={300}
              className="rounded-full"
            />
            <div className="">
              <h1>John Doe</h1>
              <h2>Position</h2>
            </div>
          </div>

          <div className="education">
            <p>Bachelors</p>
            <p>Masters</p>
          </div>
          <Contact />
        </div>
      </aside>
    </>
  );
}
