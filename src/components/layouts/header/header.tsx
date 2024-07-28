import Logo from "@root/public/svgs/logo.svg";

import React, { useEffect, useState } from "react";
import { buttonVariants } from "../../common/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { HamburgerMenu } from "./hamburger-menu";
import ProfileMenu from "../profile-menu";

const LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  // {
  //   title: "Services",
  //   href: "/services",
  // },
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
  const [isLogged, setIsLogged] = useState(true);

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
    <header>
      {!isTransparentBg && <div className="h-20"></div>}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-transparent text-white h-20",
          " transition-all duration-300",
          (isScrolled || !isTransparentBg) &&
            "bg-white text-secondary shadow-[rgba(17,_17,_26,_0.05)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px]"
        )}
      >
        <div className=" container max-w-screen-lg  flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Logo className="w-12 hover:curor-pointer text-primary" />

            <Link href="/" className="hidden lg:block  font-semibold text-2xl">
              The Dental
            </Link>

            <ul className=" pl-8  justify-between items-center hidden md:flex">
              {LINKS.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className={cn(
                      " relative font-medium hover:text-primary py-4 px-4",
                      "before:content-[''] before:h-0.5 before:w-full before:bg-primary before:-bottom-[13px]",
                      "before:absolute before:transition-all before:duration-300 before:inset-x-0 before:bg-transparent hover:before:bg-primary",
                      pathname === link.href &&
                        "before:bg-primary text-primary ",
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

          {isLogged ? (
            <ProfileMenu />
          ) : (
            <ul className="hidden md:flex md:items-center md:gap-2">
              <li>
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "link", size: "lg" })}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/new-appointment"
                  className={buttonVariants({ variant: "default", size: "lg" })}
                >
                  Make Appointment
                </Link>
              </li>
            </ul>
          )}

          <HamburgerMenu isOpen={isNavOpen} changeState={toggleLinks} />
        </div>
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed bg-primary inset-0 z-40 md:hidden"
            >
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
                className="container mx-auto pt-32 pb-16 flex justify-center h-screen"
              >
                <ul className="flex h-auto gap-y-8 justify-center flex-col items-center list-none ">
                  {LINKS.map(({ title, href }, i) => (
                    <a key={i} href={href} onClick={() => setIsNavOpen(false)}>
                      <span className="relative text-white font-semibold px-2 text-xl hover:underline hover:decoration-white hover:decoration-4 hover:underline-offset-8">
                        {title}
                      </span>
                    </a>
                  ))}

                  <li>
                    <Link
                      href="/login"
                      className={buttonVariants({
                        variant: "link",
                        size: "lg",
                        class:
                          "text-white text-xl font-semibold hover:decoration-4 hover:underline-offset-8",
                      })}
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new-appointment"
                      className={buttonVariants({
                        variant: "white",
                        size: "lg",
                        class: "py-6 text-xl ",
                      })}
                    >
                      Make Appointment
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
