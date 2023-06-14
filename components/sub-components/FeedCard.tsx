import { AvatarFallback, AvatarImage ,Avatar} from "../ui/avatar";
import { SlBadge, SlLocationPin } from "react-icons/sl";
import { badgeVariants } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { AiOutlineHeart } from "react-icons/ai";
import { faker } from "@faker-js/faker";

export default function FeedCard() {
  return (
    <div className="bg-white px-8 py-6 flex flex-col rounded-xl shadow-sm shadow-primary-foreground border border-slate-100 hover:bg-slate-50 hover:border hover:border-primary transition-all duration-300 hover:cursor-pointer">
      {/* header */}
      <div className="flex w-full  justify-between">
        <div className="flex items-center">
          <Avatar className="h-12 w-12">
            <AvatarImage src={faker.image.avatar()}/>
            <AvatarFallback>
              <AvatarImage />
            </AvatarFallback>
          </Avatar>
          <div className={"flex flex-col px-3 gap-2"}>
            <div className="flex items-center gap-3">
              <h1 className="text-md font-medium">{faker.name.fullName()}</h1>
              <span
                className={cn(
                  badgeVariants({ variant: "secondary" }),
                  "bg-blue-50 py-1 h-fit text-primary gap-2"
                )}
              >
                {faker.datatype.number({min:20,max:60})} years old
              </span>
            </div>
            <div className="flex gap-4">
              <span className={"flex gap-2 items-center"}>
                <SlBadge className="text-lg text-primary" />
                <span className="text-sm">Actor</span>
              </span>
              <span className={"flex gap-2 items-center"}>
                <SlLocationPin className="text-lg text-primary" />{" "}
                <span className="text-sm">{faker.address.cityName()},{" "}{faker.address.country()}</span>
              </span>
            </div>
          </div>
        </div>
        <Button
          variant={"ghost"}
          className="rounded-full p-1 h-10 w-10 hover:bg-pink-100 hover:text-pink-500"
        >
          <AiOutlineHeart className="text-xl text-pink-500" />
        </Button>
      </div>

      {/* about */}
      <p className="py-3 text-md text-slate-500">
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
          Actor
        </span>
        <span
          className={cn(
            badgeVariants({ variant: "secondary" }),
            "bg-blue-50 py-2 px-3 h-fit text-sm font-semibold text-primary gap-2"
          )}
        >
          Dynamic Actor
        </span>
        <span
          className={cn(
            badgeVariants({ variant: "secondary" }),
            "bg-blue-50 py-2 px-3 h-fit text-sm font-semibold text-primary gap-2"
          )}
        >
          Drama
        </span>
      </div>
    </div>
  );
}
