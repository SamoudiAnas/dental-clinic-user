import Logo from "@root/public/images/logo.svg";
import Link from "next/link";

function Footer() {
  const goTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-8 px-4 bg-zinc-900">
      <div className="container">
        <Link
          href="/"
          className="flex justify-center items-center gap-2 mt-8 mb-4  md:justify-start"
        >
          <Logo className="w-10 text-white hover:cursor-pointer" />
          <p className="text-white font-semibold text-xl">The Dental</p>
        </Link>
        <div className="text-center text-gray-500 md:text-left md:grid md:grid-cols-3 md:gap-8">
          <div>
            <p>
              Phone Number:{" "}
              <span className="text-primary underline hover:cursor-pointer">
                +123456789
              </span>
            </p>
            <p>
              Email:{" "}
              <span className="text-primary underline hover:cursor-pointer">
                email@contact.com
              </span>
            </p>
          </div>

          <div className="text-zinc-500 mt-4 md:mt-0">
            <p>866 Balistreri Light Suite 937, Helgatown 93810-6364</p>
          </div>
          <ul className="flex justify-center md:justify-end mt-8 md:mt-0 flex-wrap gap-y-4 gap-x-12 text-primary m-auto hover:text-primary-hover">
            <li>
              <Link
                href="/"
                className="text-white font-medium hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white font-medium hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white font-medium hover:text-primary"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="text-white font-medium hover:text-primary"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="/sign-in"
                className="text-white font-medium hover:text-primary"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/new-appointment"
                className="text-white font-medium hover:text-primary"
              >
                Make Appointment
              </Link>
            </li>
          </ul>
        </div>
        <div className="opacity-20 w-full h-[1px] block border-t border-zinc-500 mt-12 mb-4" />
        <div className="px-4 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            &copy; Copyright {new Date().getFullYear()} - All rights reserved -
            Created By{" "}
            <a
              target="_blank"
              href="https://samoudianas.dev"
              className="text-primary underline"
            >
              Anas Samoudi
            </a>
          </p>
          <p
            className="text-primary underline hover:cursor-pointer"
            onClick={goTop}
          >
            Go back top
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
