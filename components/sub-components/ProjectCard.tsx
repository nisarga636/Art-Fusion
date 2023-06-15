import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import { SlBadge, SlLocationPin } from "react-icons/sl";
import { badgeVariants } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { faker } from "@faker-js/faker";
import { MdPendingActions } from "react-icons/md";

export default function FeedCard() {
  return (
    <div className="bg-white px-8 py-6 flex flex-col rounded-xl shadow-sm shadow-primary-foreground border border-slate-100 hover:bg-slate-50 hover:border hover:border-primary transition-all duration-300 hover:cursor-pointer">
      {/* header */}
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={faker.image.avatar()} />
          </Avatar>
          <div className="flex flex-col pr-3 gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-md font-medium">{faker.random.words(2)}</h1>
              <span
                className={cn(
                  badgeVariants({ variant: "secondary" }),
                  "bg-blue-50 py-1 h-fit text-primary gap-2"
                )}
              >
                {faker.datatype.number({ min: 20, max: 60 })} months
              </span>
            </div>
            <div>
              <span className="flex gap-2 items-center">
                <SlLocationPin className="text-lg text-primary" />
                <span className="text-sm">
                  {faker.address.cityName()}, {faker.address.country()}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex -space-x-3">
          <Avatar>
            <AvatarImage src={faker.image.avatar()} />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src={faker.image.avatar()} />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src={faker.image.avatar()} />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>128+</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* about */}
      <div className="h-20 my-3 rounded-md border-black flex justify-center items-center">
        <div className="h-12 w-full py-3 px-3 justify-center items-center hover:text-green-500">
          <div className="flex">
            <AiOutlineCheckCircle className="text-xl mr-2 text-green-500" />
            <span>12 Tasks Completed</span>
          </div>
        </div>
        <div className="h-12 w-full pl-3 justify-center hover:text-yellow-500">
          <div className="flex">
            <AiOutlineClockCircle className="text-xl mr-2 text-yellow-500" />
            <span>124 Tasks Pending</span>
          </div>
        </div>
      </div>

      <p className="pb-3 text-md text-slate-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolorem
        temporibus provident, rem quam ex fugit repellat, aperiam pariatur aut
        laboriosam reiciendis! Beatae optio qui, deleniti reprehenderit ipsam
        alias quidem?
      </p>

      {/* skills */}
      <div className="flex gap-3">
        <span
          className={cn(
            badgeVariants({ variant: "secondary" }),
            "bg-blue-50 py-2 px-3 h-fit text-sm font-semibold text-primary gap-2"
          )}
        >
          Thriller
        </span>
      </div>
    </div>
  );
}
