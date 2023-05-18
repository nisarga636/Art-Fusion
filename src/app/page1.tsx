"use client"
import Link from "next/link"

const Page1 = () => {
    return (
        <div 
        className={
            "container mx-auto flex items-center border-b-2 px-6 py-2 h-24"
        }
        >
            <h1 className="font-bold">Programistafrontend</h1>
            <div className="grow">
                <div
                className="flex items-center justify-center gap-2
md:gap-8"
>
    <Link href="home">HOME</Link>
    <Link href="About">ABOUT</Link>
    <Link href="blog">BLOG</Link>
    <Link href="contact">CONTACT</Link>
    <Link href="shop">Shop</Link>
        <Link href="register" className="mr-2 font-bold">
            Sign up
        </Link>
        <Link href="login" className="font-bold">
            Login
        </Link>
        </div>
</div>
</div>
    );
};

export default Page1;