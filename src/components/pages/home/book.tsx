import { buttonVariants } from "@/components/common/button";
import Link from "next/link";

export const Book = () => {
  return (
    <div className="bg-[rgba(247,247,247,1)]">
      <section
        style={{
          backgroundSize: "100%",
        }}
        className="py-32 bg-no-repeat px-4 text-center text-white  container max-w-screen-lg  relative z-10 bg-primary"
      >
        <h2 className="text-3xl font-semibold md:text-5xl">
          Book An Appintment Online
        </h2>
        <p className="mt-4 mb-8 mx-auto max-w-[70ch]">
          We provide the best dental care services to you and your family. We
          have the best doctors and staff to help you with your dental problems
        </p>
        <Link
          href="/new-appointment"
          className={buttonVariants({
            variant: "secondary",
          })}
        >
          Make Appointment
        </Link>
      </section>
    </div>
  );
};
