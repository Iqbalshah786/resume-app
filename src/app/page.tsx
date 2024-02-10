import About from "./components/About";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <SideBar />
      <div className="w-full ">
        <About />
      </div>
    </main>
  );
}
