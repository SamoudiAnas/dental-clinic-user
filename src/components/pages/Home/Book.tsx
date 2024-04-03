import { buttonVariants } from "@/components/common/Button";
import Link from "next/link";

export const Book = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(97, 83, 204, 0.9),rgba(97, 83, 204, 0.9)), url(/images/background.jpg)",
        backgroundSize: "100%",
      }}
      className="py-32 bg-no-repeat px-4 text-center text-white"
    >
      <h2 className="text-3xl font-semibold md:text-5xl">
        Book An Appintment Online
      </h2>
      <p className="mt-4 mb-8 mx-auto max-w-[70ch]">
        We provide the best dental care services to you and your family. We have
        the best doctors and staff to help you with your dental problems
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
  );
};
