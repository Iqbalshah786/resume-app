import profile from "../../../public/images/db.jpeg";
import Image from "next/image";
import Contact from "./Contact";
import { contacts } from "../../../data/data";
export default function SideBar({}) {
  return (
    <>
      <aside
        className={`w-full h-full  py-16 text-white md:px-4 flex flex-col items-center justify-center`}
      >
        <div className="w-full h-auto  flex flex-col  items-center gap-4  justify-center">
          <div className="name text-center flex flex-col justify-center items-center gap-4 mt-12">
            <Image
              src={profile}
              alt="profile picture"
              className="rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex-shrink-0"
            />
            <div>
              <h1 className="my-4 text-[#fff734] md:text-[40px] lg:text-[56px] ">
                John Doe
              </h1>
              <h2 className="md:text-xl lg:text-2xl">Software Engineer</h2>
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
          <div className="contact mt-8 md:mt-20  ">
            <Contact contacts={contacts} />
          </div>
        </div>
      </aside>
    </>
  );
}
