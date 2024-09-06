import BasicLayout from "@/layouts/basic-layout";
import Service1Icon from "@root/public/svgs/service1.svg";
import Service2Icon from "@root/public/svgs/service2.svg";
import Service3Icon from "@root/public/svgs/service3.svg";
import Service4Icon from "@root/public/svgs/service4.svg";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <BasicLayout isTransparentBg>
      <Head>
        <title>About | The Dental</title>
        <meta
          name="description"
          content="Dentist is a dental clinic that offers a wide range of services. We are located in the heart of the city and have been serving the community for over 20 years."
        />
      </Head>
      <div
        className="py-12 pt-48 bg-cover px-4"
        style={{
          backgroundImage: 'url("/images/dentalChair.jpg")',
          backgroundColor: "var(--secondary)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className=" container max-w-screen-lg ">
          <h2 className="font-bold text-center text-3xl md:text-5xl text-white px-4">
            About
          </h2>{" "}
          <p className="max-w-[80ch] mx-auto text-center text-white pt-4 px-12 italic">
            We provide the best dental care services to you and your family. We
            have the best doctors and staff to help you with your dental
            problems
          </p>
        </div>
      </div>
      <div className="py-12 px-4 md:grid md:grid-cols-[3fr_2fr] md:gap-32 container max-w-screen-lg items-start">
        <div className="my-auto">
          <h1 className="pb-4 text-4xl md:text-5xl font-bold text-secondary">
            Hello again!
          </h1>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          <p className="text-gray-700">
            I&apos;m{" "}
            <span className="underline font-medium text-primary">John Doe</span>
            , a dentist with over 20 years of experience in the field. I have
            been helping people with their dental problems for a long time now.
            <br />
            <br />
            I have a team of professionals who are always ready to help you with
            your dental problems.
            <br />
            <br />
            We provide the best dental care services to you and your family. We
            have the best doctors and staff to help you with your dental
            problems.
          </p>
        </div>
        <div className="relative w-full mt-8 md:mt-0">
          <div className="object-cover w-full h-full rounded-xl shadow-xl overflow-hidden my-auto">
            <Image
              src="/images/Dentist.jpg"
              alt="Dentist"
              className="w-full"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="my-8 bg-primary py-16 md:py-16 px-4 md:px-8 rounded-md flex flex-col md:flex-row items-center gap-4 container max-w-screen-lg">
          <div className="w-1/4">
            <div className="w-20 h-20 mx-auto flex justify-center items-center mb-4 rounded-full bg-white/10 overflow-visible p-2">
              <Service1Icon className="fill-primary w-16 h-16 overflow-visible" />
            </div>
            <h4 className="text-white text-center font-semibold mt-8">
              Dental Checking
            </h4>
          </div>
          <div className="w-1/4">
            <div className="w-20 h-20 mx-auto flex justify-center items-center mb-4 rounded-full bg-white/10 overflow-visible p-2">
              <Service2Icon className="fill-primary w-16 h-16 overflow-visible" />
            </div>
            <h4 className="text-white text-center font-semibold mt-8">
              Dental Care
            </h4>
          </div>
          <div className="w-1/4">
            <div className="w-20 h-20 mx-auto flex justify-center items-center mb-4 rounded-full bg-white/10 overflow-visible p-2">
              <Service3Icon className="fill-primary w-16 h-16 overflow-visible" />
            </div>
            <h4 className="text-white text-center font-semibold mt-8">
              Tooth Setting
            </h4>
          </div>
          <div className="w-1/4">
            <div className="w-20 h-20 mx-auto flex justify-center items-center mb-4 rounded-full bg-white/10 overflow-visible p-2">
              <Service4Icon className="fill-primary w-16 h-16 overflow-visible" />
            </div>
            <h4 className="text-white text-center font-semibold mt-8">
              Dental Treatment
            </h4>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default About;
