"use client";
import { useState } from "react";
import About from "./components/About";
import SideBar from "./components/SideBar";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-full h-screen flex relative">
      <div className="absolute md:hidden top-4 left-6">
        {isOpen === true ? (
          <X
            color="black"
            className="w-[30px] md:w-[40px]"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <Menu
            color="black"
            className="w-[30px] md:w-[40px]"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full md:relative  md:block md:w-[60vw] lg:w-[50vw] bg-[#191a19] ${
          isOpen === false ? "hidden" : "block"
        }`}
      >
        <div className="absolute top-12 right-6">
          {isOpen && (
            <X size={40} color="white" onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
        <SideBar />
      </div>
      <div className=" w-full  md:overflow-y-auto">
        <About />
      </div>
    </main>
  );
}
