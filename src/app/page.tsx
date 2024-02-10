import About from "./components/About";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <div className="md:w-[50vw] ">
        <SideBar />
      </div>
      <div className="w-full  overflow-y-auto">
        <About />
      </div>
    </main>
  );
}
