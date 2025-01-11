import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FaAlignRight } from "react-icons/fa6";

export function NavSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className="bg-[#FF0000] hover:bg-orange-500 text-gray-200  transition-all duration-300"
        >
          <FaAlignRight />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0">
        <SheetTitle className="flex flex-col gap-10 font-normal text-5xl justify-center h-full text-center">
          <Link href={"/"} className="gradient py-4 ">
            Home
          </Link>
          <Link href={"/aboutme"} className="gradient py-4">
            About Me
          </Link>
          <Link href={"/contact"} className="gradient py-4 ">
            Contact
          </Link>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
}
