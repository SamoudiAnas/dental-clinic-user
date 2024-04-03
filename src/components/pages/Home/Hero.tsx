import { buttonVariants } from "@/components/common/Button";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-right bg-fixed bg-hero"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.0)), url('/images/hero.jpg')",
      }}
    >
      <section className="mb-24 min-h-[80vh]  md:grid md:grid-cols-2 md:gap-32 md:mb-32 container">
        <div className="my-auto flex flex-col justify-center items-start">
          <h2 className="my-4 text-white pt-12 font-semibold text-5xl md:text-6xl">
            Because Your Smile <br />{" "}
            <span className="underline">Is Precious</span>
          </h2>
          <p className="my-8 text-white">
            We provide the best dental care services to you and your family. We
            have the best doctors and staff to help you with your dental
            problems.
          </p>
          <Link
            href="/new-appointment"
            className={buttonVariants({
              variant: "default",
            })}
          >
            Make Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
