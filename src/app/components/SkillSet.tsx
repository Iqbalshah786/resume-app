"use client";
interface skillType {
  soft: { icon: string; text: string }[];
  hard: { icon: string; text: string }[];
}
interface SkillSetProps {
  skills: skillType;
  selectedSkill: boolean;
}
export default function SkillSet({ skills, selectedSkill }: SkillSetProps) {
  return (
    <div className="bg-blue-500 flex gap-4 flex-wrap">
      {selectedSkill
        ? skills.hard.map((skill, index) => (
            <div
              key={index}
              className=" w-max flex items-center p-2  rounded bg-pink-500"
            >
              <span className="mr-2">{skill.icon}</span>
              <span>{skill.text}</span>
            </div>
          ))
        : skills.soft.map((skill, index) => (
            <div
              key={index}
              className="w-max flex items-center p-2  rounded bg-pink-500"
            >
              <span className="mr-2">{skill.icon}</span>
              <span>{skill.text}</span>
            </div>
          ))}
    </div>
  );
}
