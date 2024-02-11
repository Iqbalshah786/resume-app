"use client";
import About from "./components/About";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <div className="relative hidden md:block md:w-[60vw] lg:w-[50vw] bg-[#191a19]">
        <div className="absolute bg-white"></div>
        <SideBar />
      </div>
      <div className=" w-full  overflow-y-auto">
        <About />
      </div>
    </main>
  );
}
