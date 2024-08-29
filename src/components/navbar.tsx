"use client";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./switcher";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export default function NavbarPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const navigate = useTranslations("Navigation");
    return (
        <>
            <header className="fixed w-full h-20 shadow-xl bg-white">
                <div className="flex items-center justify-between h-10 w-full px-5 2xl:px-12">
                    <Link href="/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/800px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </Link>
                    <nav className="hidden sm:flex font-semibold md:w-[60%] justify-between">
                        <ul className="hidden sm:flex list-none items-center md:gap-1">
                            <Link href="/home">
                                <li className="mx-3"> {navigate("home")}</li>
                            </Link>
                            <Link href="/gallery">
                                <li className="mx-3">{navigate("gallery")}</li>
                            </Link>
                            <Link href="/about">
                                <li className="mx-3"> {navigate("about")}</li>
                            </Link>
                            <Link href="/facility">
                                <li className="mx-3">{navigate("facility")}</li>
                            </Link>
                        </ul>
                        <div className="mr-5">
                            <button className="border-2 rounded-md p-3 inline-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="tabler-icon tabler-icon-world h-5 w-5"
                                >
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M3.6 9h16.8"></path>
                                    <path d="M3.6 15h16.8"></path>
                                    <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                                    <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                                </svg>
                                <LocalSwitcher />
                            </button>
                        </div>
                    </nav>

                    <div
                        onClick={handleNav}
                        className="sm:hidden cursor-pointer pl-20"
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div
                    className={
                        menuOpen
                            ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-5 ease-in duration-500"
                            : "fixed right-[-100%] top 0 p-5 ease-in duration-400"
                    }
                >
                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleNav} className="cursor-pointer">
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className="flex-col py-4">
                        <ul>
                            <Link href="/home">
                                <li
                                    className="py-4 cursor-pointer"
                                    onChange={() => setMenuOpen(false)}
                                >
                                    {navigate("home")}
                                </li>
                            </Link>
                            <Link href="/gallery">
                                <li
                                    className="py-4 cursor-pointer"
                                    onChange={() => setMenuOpen(false)}
                                >
                                    {navigate("gallery")}
                                </li>
                            </Link>
                            <Link href="/about">
                                <li
                                    className="py-4 cursor-pointer"
                                    onChange={() => setMenuOpen(false)}
                                >
                                    {" "}
                                    {navigate("about")}
                                </li>
                            </Link>
                            <Link href="/facility">
                                <li
                                    className="py-4 cursor-pointer"
                                    onChange={() => setMenuOpen(false)}
                                >
                                    {navigate("facility")}
                                </li>
                            </Link>
                        </ul>

                        <button className="border-2 rounded-md p-3 inline-flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="tabler-icon tabler-icon-world h-5 w-5"
                            >
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                <path d="M3.6 9h16.8"></path>
                                <path d="M3.6 15h16.8"></path>
                                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                            </svg>
                            <LocalSwitcher />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
