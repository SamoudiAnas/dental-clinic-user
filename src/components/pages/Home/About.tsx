import { buttonVariants } from "@/components/common/Button";
import Link from "next/link";

export const About = () => {
  return (
    <section className="container pb-16">
      <div className=" md:grid md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="my-auto">
          <img
            src="/images/about.jpg"
            alt="Dr. John Doe"
            className="h-96 mb-8 md:mb-0"
          />
        </div>
        <div className="my-auto">
          <h2 className="text-secondary font-semibold text-3xl md:text-4xl mb-4">
            I'm Dr. John Doe.
            <br />
            <span className="font-semibold text-gray-700">
              Actually, I love to care Patient.
            </span>
          </h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet{" "}
            <span className="font-medium underline">
              consectetur adipisicing elit.
            </span>{" "}
            Saepe, quam alias nemo a animi, eos placeat incidunt ratione eveniet
            obcaecati, necessitatibus explicabo sapiente! Pariatur hic eos
            facilis odio nemo nisi.
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            est harum molestias{" "}
            <span className="font-medium underline">
              {" "}
              facilis saepe aliquid
            </span>{" "}
            rem quo at inventore sapiente perspiciatis obcaecati fugiat, sit eum
            soluta veritatis expedita deserunt voluptates!
            <br />
          </p>
          <Link
            href="/TheDental/client/contact"
            className={buttonVariants({
              variant: "default",
            })}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};
