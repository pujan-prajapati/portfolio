import React from "react";
import { Wrapper } from "./Wrapper";
import { ModeToggle } from "./theme-toggle";
import { NavSidebar } from "./NavSidebar";

export const Navbar = () => {
  return (
    <section>
      <Wrapper className="flex justify-between items-center">
        <a href="/">
          <img
            src="/logo/dark-logo.png"
            alt="dark-logo"
            className="hidden dark:block"
          />
          <img
            src="/logo/light-logo.png"
            alt="light-logo"
            className="dark:hidden"
          />
        </a>

        <div className="flex gap-5">
          <ModeToggle />
          <NavSidebar />
        </div>
      </Wrapper>
    </section>
  );
};
