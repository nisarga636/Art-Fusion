import { Inter } from "next/font/google";
import { Button } from "../ui/button";
import NavButton from "../ui/navbutton";
import { AiFillHeart } from "react-icons/ai";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { faker } from "@faker-js/faker";
import Link from "next/link";

const italiana = Inter({ weight: "700", subsets: ["latin"] });

export default function NavBar({
  isFor = "DEFAULT",
}: {
  isFor?: "PRODUCTION" | "ARTIST" | "DEFAULT";
}) {
  return (
    <nav className="bg-[rgba(255,255,255,0.8)] backdrop-blur-sm z-40  h-[58px] sticky top-0 left-0 flex items-center shadow-sm px-10 justify-between">
      <Link
        href={
          isFor == "PRODUCTION"
            ? "/production"
            : isFor == "ARTIST"
            ? "/artist"
            : "/"
        }
      >
        <h1 style={italiana.style} className="text-xl font-bold text-primary">
          Art Fusion
        </h1>
      </Link>
      <div className="gap-8 flex items-center">
        {isFor == "PRODUCTION" ? (
          <>
            <NavButton href="/production/talents">Talents</NavButton>
            <NavButton href="/production/my-projects">Projects</NavButton>
            <NavButton
              href="/production/favourites"
              className="hover:bg-pink-100 p-2 rounded-full"
            >
              <AiFillHeart className="text-xl text-pink-500" />
            </NavButton>
            <NavButton href="/production/my-profile">
              <Avatar>
                <AvatarImage src={faker.image.avatar()} />
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
