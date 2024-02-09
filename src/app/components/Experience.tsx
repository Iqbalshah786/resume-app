import { experiences } from "../../../data/data";
export default function Experience() {
  return (
    <div className=" w-full bg-white mt-8 ">
      <h1>PROFESSIONAL EXPERIENCE</h1>

      {experiences.map((experience) => (
        <div
          key={experience.position}
          className={`experience  px-6 mt-8  py-4 border-[0.5px] shadow-md border-t-8  ${
            experience.isPresent ? "border-t-green-400" : "border-t-gray-100"
          }`}
        >
          <h3 className="mb-4">
            {experience.position} ({experience.start_year}-
            {experience.isPresent ? " Present" : experience.end_year})
          </h3>
          <p className="tex-justify">{experience.objective}</p>
        </div>
      ))}
    </div>
  );
}
