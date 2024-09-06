import { buttonVariants } from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section className="container max-w-screen-lg py-16 md:py-28 px-4">
      <div className=" md:grid md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="my-auto h-full">
          <Image
            src="/images/about.jpg"
            alt="Dr. John Doe"
            className="h-full mb-8 md:mb-0 object-cover object-center rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
        <div className="my-auto">
          <h2 className="text-secondary font-semibold text-3xl md:text-4xl mb-4">
            I&apos;m Dr. John Doe.
            <br />
            <span className="font-semibold text-gray-700">
              Actually, I love to care Patient.
            </span>
          </h2>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          <p className="mb-8 text-gray-600">
            I am a dentist with over 10 years of experience in the field. I have
            a passion for helping people achieve their best smile and maintain
            good oral health. <br />
            <br /> I offer a wide range of dental services, including general
            dentistry, cosmetic dentistry, and orthodontics. Whether you need a
            routine cleaning or a complete smile makeover, I am here to help.
            <br />
            <br />I take the time to listen to your concerns and develop a
            personalized treatment plan that meets your needs and fits your
            budget.
          </p>
          <Link
            href="/TheDental/client/contact"
            className={buttonVariants({
              variant: "default",
            })}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
};
