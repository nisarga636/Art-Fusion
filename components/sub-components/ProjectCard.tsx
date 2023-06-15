import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import { SlLocationPin } from "react-icons/sl";
import { badgeVariants } from "../ui/badge";
import { cn } from "@/lib/utils";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function FeedCard() {
  return (
    <div className="bg-white flex flex-col w-full overflow-hidden rounded-xl shadow-sm shadow-primary-foreground border border-slate-100 hover:bg-slate-50 hover:border hover:border-primary transition-all duration-300 hover:cursor-pointer">
      <div className="h-[280px] w-full relative overflow-hidden">
        <Image src={faker.image.abstract(640,480,true)} fill alt={"poster"} />
      </div>

      <div className="p-3">
        {/* header */}
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <div className="flex flex-col pr-3 gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-semibold whitespace-nowrap w-40 truncate">
                  {faker.random.words(2)}
                </h1>
                <span
                  className={cn(
                    badgeVariants({ variant: "secondary" }),
                    "bg-blue-50 py-1 h-fit text-primary gap-2"
                  )}
                >
                  {faker.datatype.number({ min: 20, max: 60 })} months
                </span>
              </div>
              <div className="flex gap-3">
                <span className="flex gap-2 items-center font-medium">
                  ₹
                  <span className="text-sm">
                    {faker.datatype
                      .number({ min: 200000, max: 80000000 })
                      .toLocaleString("en-IN")}
                  </span>
                </span>
                <span className="flex gap-2 items-center">
                  <SlLocationPin className="text-lg text-primary" />
                  <span className="text-sm whitespace-nowrap">
                    {faker.address.cityName()}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex -space-x-3">
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
        <div className="flex items-center justify-between py-5 px-2">
          <div className="flex">
            <AiOutlineCheckCircle className="text-xl mr-2 text-green-500" />
            <span>12 Tasks Completed</span>
          </div>
          <div className="flex">
            <AiOutlineClockCircle className="text-xl mr-2 text-yellow-500" />
            <span>124 Tasks Pending</span>
          </div>
        </div>
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
    </div>
  );
}
