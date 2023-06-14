import { Inter } from "next/font/google";
import { Button } from "../ui/button";
import NavButton from "../ui/navbutton";
import { AiOutlineHeart } from "react-icons/ai";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const italiana = Inter({ weight: "700", subsets: ["latin"] });

export default function NavBar({
  isFor = "DEFAULT",
}: {
  isFor?: "PRODUCTION" | "ARTIST" | "DEFAULT";
}) {
  return (
    <nav className="bg-white h-[58px] flex items-center shadow-sm px-10 justify-between">
      <h1 style={italiana.style} className="text-xl font-bold text-primary">
        Art Fusion
      </h1>
      <div className="gap-8 flex items-center">
        {isFor == "PRODUCTION" ? (
          <>
            <NavButton href="/production/talents">Talents</NavButton>
            <NavButton href="/production/my-projects">Projects</NavButton>
            <NavButton href="/production/my-favourite" className="hover:bg-pink-100 p-2 rounded-full">
              <AiOutlineHeart className="text-xl text-pink-500" />
            </NavButton>
            <NavButton href="/production/my-profile">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>
                  <AvatarImage />
                </AvatarFallback>
              </Avatar>
            </NavButton>
          </>
        ) : (
          <>
            <Button size={"sm"} variant={"ghost"}>
              Login as Talent
            </Button>
            <Button size={"sm"}>Hire Talent</Button>
            <Button size={"sm"} variant={"outline"}>
              Apply as Talent
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
