import Image from "next/image";
import React from "react";

const SkillData = [
  { id: 1, name: "HTML", imageLocation: "/assets/skills/html.png" },
  { id: 2, name: "CSS", imageLocation: "/assets/skills/css.png" },
  { id: 3, name: "JavaScript", imageLocation: "/assets/skills/javascript.png" },
  { id: 4, name: "React", imageLocation: "/assets/skills/react.png" },
  { id: 5, name: "Tailwind", imageLocation: "/assets/skills/tailwind.png" },
  { id: 6, name: "Java", imageLocation: "/assets/skills/java.svg" },
  { id: 7, name: "Github", imageLocation: "/assets/skills/github1.png" },
  { id: 8, name: "MySQL", imageLocation: "/assets/skills/mysql.svg" },
  { id: 9, name: "Cisco", imageLocation: "/assets/skills/cisco-icon.svg" },
  { id: 10, name: "Huawei", imageLocation: "/assets/skills/huawei-icon.svg" },
  {
    id: 11,
    name: "Microsoft",
    imageLocation: "/assets/skills/microsoft-icon.svg",
  },
  { id: 12, name: "Nokia", imageLocation: "/assets/skills/Nokia_2023.svg" },
];

const SkillSet = () => {
  const listSkills = SkillData.map((skill) => (
    <li key={skill.id}>
      <div className="flex flex-col-2 items-center md:justify-center shadow-md shadow-gray-400 p-4 hover:scale-105 cursor-pointer duration-300">
        <Image src={skill.imageLocation} width="64" height="64" alt="/" />
        <div className="mx-4 p-2 items-center border-l-2 border-gray-400">
          <h3>{skill.name}</h3>
        </div>
      </div>
    </li>
  ));
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {listSkills}
    </ul>
  );
};

export default SkillSet;
