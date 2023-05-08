import { Noto_Serif_Devanagari} from "next/font/google";
import Link from "next/link";

interface props {
  children: React.ReactNode;
}

const MyFont = Noto_Serif_Devanagari({ weight: "400", subsets: ["devanagari"] });

export default function RootLayout({ children }: props) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <header
        style={MyFont.style}
        className="h-14 border-b border-gray-600 flex items-center px-5 text-xl font-mono font-bold"
      >
        Art Fusion
      </header>
      <div className="w-full h-full flex">
        <nav className="h-full w-[180px] border-r border-gray-600 p-5">
          <ul className="w-full flex flex-col gap-3">
            <Link href={"/dashboard"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Home
              </li>
            </Link>
            <Link href={"/dashboard/myprojects"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                My Projects
              </li>
            </Link>
            <Link href={"/dashboard/messages"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Messages
              </li>
            </Link>
            <Link href={"/dashboard/payments"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Payments
              </li>
            </Link>
              <Link href={"/dashboard/enthusiasts"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
              Enthusiasts
              </li>
            </Link>
            <Link href={"/dashboard/createpost"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Create Post
              </li>
            </Link>
          </ul>       
        </nav>
        <main className="w-full h-full bg-gray-950 flex items-center justify-center overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}