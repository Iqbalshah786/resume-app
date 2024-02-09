import About from "./components/About";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <main className="w-full h-screen bg-red-500 flex">
      <SideBar />
      <div className="w-full ">
        <About />
      </div>
    </main>
  );
}
