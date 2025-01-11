import { HomeDock } from "@/app/_components/Floating-dock";
import { Navbar } from "@/app/_components/Navbar";
import { Wrapper } from "@/app/_components/Wrapper";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <Navbar />
        <Wrapper className="mt-5 flex flex-col lg:flex-row justify-between items-center">
          <div className="md:text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-2xl  lg:text-5xl mb-1">Hello, It's Me</h3>
            <h1 className="text-5xl lg:text-7xl mb-5 text-[#FF0000] font-bold lilita-one-regular">
              Pujan Prajapati
            </h1>
            <p className=" lg:max-w-[600px] text-base lg:text-lg">
              A passionate student studying Bsc. CSIT at Samriddhi College
              currently in my 5th semester. <br /> I have completed a 3-month
              intership at GrowByData Nepal, diving deep into MERN stack
              development. And I am familer with Designing as well.
            </p>
            <div className="mt-5 md:flex md:justify-center lg:block gap-5 ">
              <Link href={"/aboutme"}>
                <Button className="bg-[#FF0000] text-white hover:bg-[#ff2c2c] py-6 lg:text-base pulsate-fwd">
                  About Me <IconArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <img
            src="/hero.png"
            alt="hero image"
            className="w-[350px] md:w-[300px] lg:w-[600px] pulsate-bck mb-5 lg:mb-0 lg:order-2"
          />
        </Wrapper>
        <HomeDock />
      </BackgroundBeamsWithCollision>
    </>
  );
}
