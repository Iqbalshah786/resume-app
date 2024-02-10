import { useState } from "react";
import SkillSet from "./SkillSet";
import { skills } from "../../../data/data";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(false);

  return (
    <div className="w-full">
      <div className="skillType mb-4">
        <button
          className={`w-1/2 text-left p-4 hover:bg-[#191a19] hover:text-[#fff734] ${
            selectedSkill === false ? "bg-[#fff734]" : "bg-gray-200"
          }`}
          onClick={() => setSelectedSkill(false)}
        >
          soft skill
        </button>
        <button
          className={` w-1/2 text-right p-4 hover:bg-[#191a19] hover:text-[#fff734]  ${
            selectedSkill === true ? "bg-[#fff734]" : "bg-gray-200"
          }`}
          onClick={() => setSelectedSkill(true)}
        >
          hard skill
        </button>
      </div>
      <SkillSet skills={skills} selectedSkill={selectedSkill} />
    </div>
  );
}
