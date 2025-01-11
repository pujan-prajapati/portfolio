import React from "react";

interface SkillCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const SkillCard = ({ description, imgSrc, title }: SkillCardProps) => {
  return (
    <div className="bg-white  text-black flex flex-col items-center h-96 rounded-lg shadow-md shadow-[#FF0000] transition-all duration-200 hover:shadow-[#FF0000] hover:shadow-lg dark:shadow-[#FF0000]">
      <img src={imgSrc} alt={title} className="w-72 h-[288px] object-contain" />
      <div className="px-5 space-y-2">
        <h3 className="text-2xl text-[#FF0000]">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
