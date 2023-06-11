import { Space_Mono } from "next/font/google";
import Link from "next/link";

interface props {
  children: React.ReactNode;
}

const ArtfusionFont = Space_Mono({ weight: "400", subsets: ["latin-ext"] });

export default function RootLayout({ children }: props) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <header
        style={ArtfusionFont.style}
        className="h-14 border-b border-gray-600 flex items-center px-5 text-xl font-mono font-bold"
      >
        Art Fusion Dashboard
      </header>
      <div className="w-full h-full flex">
        <nav className="h-full w-[180px] border-r border-gray-600 p-5">
          <ul className="w-full flex flex-col gap-3">
            <Link href={"/dashboard"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Home
              </li>
            </Link>
            <Link href={"/dashboard/gallery"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Gallery
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
            <Link href={"/dashboard/myprojects"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                My Projects
              </li>
            </Link>
            <Link href={"/dashboard/searchjob"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Search Job
              </li>
            </Link>
            <Link href={"/dashboard/settings"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Settings
              </li>
            </Link>
          </ul>
        </nav>
        <main className="w-full h-full bg-gray-500 flex items-center justify-center overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
