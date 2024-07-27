import Logo from "@root/public/svgs/logo.svg";
import { ExternalLink, Inbox, MapPinned, Phone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../common/button";
import { useRouter } from "next/router";
import { cn } from "@/utils";

function Footer() {
  const { pathname } = useRouter();
  const isHomePage = pathname === "/";

  return (
    <div className={cn("py-8 px-4 bg-zinc-900", isHomePage && "pt-24 -mt-16 ")}>
      <div className=" container max-w-screen-lg ">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          <Link
            href="/"
            className="flex flex-col md:flex-row justify-center items-center gap-2 mt-8 mb-4  md:justify-start"
          >
            <Logo className="size-16 md:size-24 text-primary hover:cursor-pointer" />
            <p className="text-white font-semibold text-xl">The Dental</p>
          </Link>

          <Link
            href="/new-appointment"
            className={buttonVariants({
              variant: "default",
              className: "gap-2",
            })}
          >
            <span> Make Appointment</span>
            <ExternalLink className="size-5" />
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between my-8 lg:px-8">
          <div className="flex items-center gap-4">
            <Inbox className="text-primary size-6 md:size-8 shrink-0" />
            <div>
              <p className="font-medium text-sm md:text-lg text-white">
                email@contact.com
              </p>
              <p className="font-medium text-sm md:text-lg text-white">
                email2@contact.com
              </p>
            </div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <MapPinned className="text-primary size-6 md:size-8 shrink-0" />
            <p className="font-medium text-sm md:text-lg text-white max-w-[30ch]">
              866 Balistreri Light Suite 937, Helgatown 93810-6364
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-primary size-6 md:size-8 shrink-0" />
            <div>
              <p className="font-medium text-sm md:text-lg text-white">
                +1 234 567 890
              </p>
              <p className="font-medium text-sm md:text-lg text-white">
                +1 234 567 890
              </p>
            </div>
          </div>
        </div>

        <ul className="flex justify-center mt-8 md:mt-0 flex-wrap gap-y-4 gap-x-12 text-primary m-auto hover:text-primary-hover pt-12 border-t border-gray-600">
          <li>
            <Link
              href="/"
              className="text-sm md:text-base text-white font-medium hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm md:text-base text-white font-medium hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm md:text-base text-white font-medium hover:text-primary"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/create-account"
              className="text-sm md:text-base text-white font-medium hover:text-primary"
            >
              Create Account
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-sm md:text-base text-white font-medium hover:text-primary"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/new-appointment"
              className="text-sm md:text-base text-white font-medium hover:text-primary"
            >
              Make Appointment
            </Link>
          </li>
        </ul>

        <div className="text-center md:text-left md:flex md:justify-between md:items-center mt-16">
          <p className="text-gray-400 text-sm md:text-base text-center mx-auto mb-4 md:mb-0">
            &copy; Copyright {new Date().getFullYear()} - All rights reserved -
            Created By{" "}
            <Link
              target="_blank"
              href="https://samoudianas.dev"
              className="text-primary underline"
            >
              Anas Samoudi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
