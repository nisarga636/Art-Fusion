import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import { SlLocationPin } from "react-icons/sl";
import { badgeVariants } from "../ui/badge";
import { cn } from "@/lib/utils";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { Project } from "@/store/productions.slice";
import { SupaClient } from "../../utils/supabase";

export default function ProjectCard({
  className,
  isViewFull,
  feed,
}: {
  className?: string;
  isViewFull?: boolean;
  feed: Project;
}) {
  return (
    <div
      className={cn(
        "bg-white flex flex-col w-full overflow-hidden rounded-sm shadow-sm shadow-primary-foreground border border-slate-100 hover:bg-slate-50 hover:border hover:border-primary transition-all duration-300 hover:cursor-pointer",
        className
      )}
    >
      <div className="h-[280px] w-full relative overflow-hidden">
        <Image
          src={
            feed.poster.startsWith("/")
              ? SupaClient.storage
                  .from("posters")
                  .getPublicUrl(feed.poster, { download: true }).data.publicUrl
              : feed.poster
          }
          fill
          alt={"poster"}
        />
      </div>

      <div className="p-3">
        {/* header */}
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <div className="flex flex-col pr-3 gap-2">
              <div className="flex items-center gap-3">
                <h1
                  className={
                    "text-lg font-semibold " +
                    (isViewFull
                      ? ""
                      : "whitespace-nowrap max-w-[120px] truncate")
                  }
                >
                  {feed.title}
                </h1>
                <span
                  className={cn(
                    badgeVariants({ variant: "secondary" }),
                    "bg-blue-50 py-1 h-fit text-primary gap-2"
                  )}
                >
                  {feed.no_of_shooting_days} days
                </span>
              </div>
              <div className="flex gap-3">
                <span className="flex gap-2 items-center font-medium">
                  ₹<span className="text-sm">{feed.budget}</span>
                </span>
                <span className="flex gap-2 items-center">
                  <SlLocationPin className="text-lg text-primary" />
                  <span
                    className={
                      "text-sm " +
                      (isViewFull ? "" : "whitespace-nowrap w-28 truncate")
                    }
                  >
                    {feed.address}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex -space-x-4">
            <Avatar className="border-2 border-white">
              <AvatarImage src={faker.image.avatar()} />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white">
              <AvatarImage src={faker.image.avatar()} />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white">
              <AvatarImage src={faker.image.avatar()} />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="flex items-center justify-center bg-primary text-white border-2 border-white">
                8+
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* about */}
        <div className={"flex items-center py-5 gap-3"}>
          <div className="flex">
            <AiOutlineCheckCircle className="text-xl mr-2 text-green-500" />
            <span>12 Tasks</span>
          </div>
          <div className="flex">
            <AiOutlineClockCircle className="text-xl mr-2 text-yellow-500" />
            <span>124 Tasks</span>
          </div>
        </div>
        {/* skills */}
        <div className="flex gap-3">
          {feed.gener_on_prod?.map((gener, index) => (
            <span
              key={gener + 1}
              className={cn(
                badgeVariants({ variant: "secondary" }),
                "bg-blue-50 py-2 px-3 h-fit text-sm font-semibold text-primary gap-2"
              )}
            >
              {gener}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
