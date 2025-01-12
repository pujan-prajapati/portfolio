import React from "react";

interface AboutheadingProps {
  title: string;
}

const Aboutheading = ({ title }: AboutheadingProps) => {
  return <h2 className="text-4xl mb-8 font-bold text-[#FF0000]">{title}</h2>;
};

export default Aboutheading;
