import { buttonVariants } from "@/components/common/Button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container flex justify-center items-center md:text-left md:min-h-[75vh] text-center py-12">
      <div className="md:grid md:grid-cols-2 md:gap-16">
        <img
          src="/images/notFound.svg"
          alt="not found"
          className="w-96 md:w-[35rem] mx-auto"
        />
        <div>
          <h1 className="text-7xl md:text-9xl font-bold text-primary my-8">
            404
          </h1>
          <p className="max-w-[25ch] font-bold text-3xl md:text-4xl mx-auto my-8 text-secondary">
            The page that you have accessed doesn't exist!
          </p>

          <Link href="/" className={buttonVariants({ variant: "default" })}>
            Go Back Home!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
