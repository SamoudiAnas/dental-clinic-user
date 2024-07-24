import Logo from "@root/public/images/logo.svg";
import Menu from "@root/public/images/menu.svg";

import React, { useEffect, useState } from "react";
import { buttonVariants } from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/utils";

const LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

interface HeaderProps {
  isTransparentBg?: boolean;
}

function Header({ isTransparentBg = false }: HeaderProps) {
  const { pathname } = useRouter();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLinks = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (width <= 768) {
      setIsNavOpen(false);
    }
  }, [width]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-transparent text-white",
        " transition-all duration-300",
        (isScrolled || !isTransparentBg) &&
          "bg-white text-secondary shadow-[rgba(17,_17,_26,_0.05)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px]"
      )}
    >
      <div className="container flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Logo className="w-12 hover:curor-pointer text-primary" />

          <Link href="/" className="hidden md:block  font-semibold text-2xl">
            The Dental
          </Link>

          <ul className=" pl-8 flex justify-between items-center ">
            {LINKS.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className={cn(
                    " relative font-medium hover:text-primary py-4 px-4",
                    "before:content-[''] before:h-0.5 before:w-full before:bg-primary before:-bottom-[13px]",
                    "before:absolute before:transition-all before:duration-300 before:inset-x-0 before:bg-transparent hover:before:bg-primary",
                    pathname === link.href && "before:bg-primary text-primary ",
                    !isScrolled &&
                      pathname === link.href &&
                      "before:bg-white text-white",
                    !isTransparentBg &&
                      pathname === link.href &&
                      "text-primary before:bg-primary"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden md:flex md:items-center md:gap-2">
          <li>
            <Link
              href="/login"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                class: !isScrolled && "border-white",
              })}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/create-account"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Create account
            </Link>
          </li>
        </ul>

        <div className="block md:hidden">
          <Menu
            className="w-5 flex items-center hover:curor-pointer text-primary"
            onClick={toggleLinks}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
