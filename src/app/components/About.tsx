"use client";
import Experience from "./Experience";
import Skills from "./Skills";

export default function About() {
  return (
    <div className=" md:px-12">
      <div className="aboutMe flex flex-col mt-12 px-8 py-4 gap-8">
        <div className="heading">
          <h1 className=" font-bold">About</h1>
        </div>
        <div className="para  text-justify ">
          <p className="mb-8">
            As a highly motivated and driven individual with a passion for
            making a positive impact, I have a unique blend of technical and
            interpersonal skills, thanks to my background in computer science. I
            am able to tackle complex problems with ease, and I never lose sight
            of my ultimate goal, even when facing challenges.
          </p>
          <p>
            When not working, I love hiking, reading, and spending time with my
            friends and family. I believe that my determination, can-do
            attitude, and hard work make me a true asset to any team.
          </p>
        </div>
        <Skills />
        <Experience />
      </div>
    </div>
  );
}
