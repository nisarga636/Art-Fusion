import "./globals.css";
import Providers from "./providers";
import {Poppins} from "next/font/google"

interface props {
  children: React.ReactNode;
  navbar: React.ReactNode;
}

const roboto = Poppins({weight:"400",subsets:["devanagari"]})

export default function RootLayout({ children, navbar }: props) {
  return (
    <html lang="en">
      <body className="h-[100vh] w-[100vw] overflow-x-scroll" style={roboto.style}>
        {navbar}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
