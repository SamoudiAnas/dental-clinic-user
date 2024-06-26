import Logo from "@root/public/images/logo.svg";
import Menu from "@root/public/images/menu.svg";

import React, { useEffect, useState } from "react";
import { buttonVariants } from "./Button";
import Link from "next/link";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleLinks = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [width, setWidth] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (width <= 768) {
      setIsNavOpen(false);
    }
  }, [width]);

  return (
    <div className="shadow-[rgba(17,_17,_26,_0.05)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px]">
      <div className="container flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Logo className="w-12 hover:curor-pointer text-primary" />

          <Link
            href="/"
            className="hidden md:block md:text-secondary font-semibold text-2xl"
          >
            The Dental
          </Link>
        </div>
        <ul className="flex justify-between items-center gap-8 text-primary hover:text-primary-hover">
          <li>
            <Link
              href="/"
              className="text-secondary font-medium hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-secondary font-medium hover:text-primary"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-secondary font-medium hover:text-primary"
            >
              Contact
            </Link>
          </li>
          {isNavOpen && (
            <ul>
              <li>
                <Link
                  href="/sign-up"
                  className="text-secondary font-medium hover:text-primary"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-in"
                  className="text-secondary font-medium hover:text-primary"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/new-appointment"
                  className="text-secondary font-medium hover:text-primary"
                >
                  Make Appointment
                </Link>
              </li>
            </ul>
          )}
        </ul>

        <ul className="hidden md:flex md:items-center md:gap-2">
          <li>
            <Link
              href="/login"
              className={buttonVariants({ variant: "outline" })}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/create-account"
              className={buttonVariants({ variant: "default" })}
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
