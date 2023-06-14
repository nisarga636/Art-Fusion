import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import { SlBadge, SlLocationPin } from "react-icons/sl";
import { badgeVariants } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { AiOutlineHeart } from "react-icons/ai";
import { Artist } from "@/store/artists.slice";
import Link from "next/link";

export default function FeedCard({
  feed,
  onClick,
  className,
  viewProfile,
}: {
  feed: Artist;
  onClick?: () => void;
  className?: string;
  viewProfile?: boolean;
}) {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={cn(
        "bg-white px-8 py-6 flex flex-col rounded-xl shadow-sm shadow-primary-foreground border border-slate-100 transition-all duration-300",
        className
      )}
    >
      {/* header */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <Avatar className="h-12 w-12">
            <AvatarImage src={feed.avatar} />
            <AvatarFallback>
              <AvatarImage />
            </AvatarFallback>
          </Avatar>
          <div className={"flex flex-col px-3 gap-2"}>
            <div className="flex items-center gap-3">
              <h1 className="text-md font-medium">{feed.fullname}</h1>
              <span
                className={cn(
                  badgeVariants({ variant: "secondary" }),
                  "bg-blue-50 py-1 h-fit text-primary gap-2"
                )}
              >
                {feed.age} years old
              </span>
            </div>
            <div className="flex gap-4">
              <span className={"flex gap-2 items-center"}>
                <SlBadge className="text-lg text-primary" />
                <span className="text-sm">{feed.field}</span>
              </span>
              <span className={"flex gap-2 items-center"}>
                <SlLocationPin className="text-lg text-primary" />{" "}
                <span className="text-sm">{feed.location}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => {
              console.log("liked");
            }}
            variant={"ghost"}
            className="rounded-full p-1 h-10 w-10 hover:bg-pink-100 hover:text-pink-500"
          >
            <AiOutlineHeart className="text-xl text-pink-500" />
          </Button>
          {viewProfile && (
            <Link href={`/production/v/${feed.id}`}>
              <Button
                onClick={() => {
                  console.log("liked");
                }}
                size={"sm"}
              >
                View Profile
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* about */}
      <p className="py-3 text-md text-slate-500">{feed.about}</p>

      {/* skills */}
      <div className="flex gap-3">
        {feed.skills &&
          feed.skills.map((skill) => {
            return (
              <span
                className={cn(
                  badgeVariants({ variant: "secondary" }),
                  "bg-blue-50 py-2 px-3 h-fit text-sm font-semibold text-primary gap-2"
                )}
              >
                {skill}
              </span>
            );
          })}
      </div>
    </div>
  );
}
