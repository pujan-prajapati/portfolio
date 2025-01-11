import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <section className={`px-8 md:px-4 container lg:px-28 py-6 ${className}`}>
      {children}
    </section>
  );
};
