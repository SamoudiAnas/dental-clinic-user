import Service1Icon from "@root/public/images/service1.svg";
import Service2Icon from "@root/public/images/service2.svg";
import Service3Icon from "@root/public/images/service3.svg";
import Service4Icon from "@root/public/images/service4.svg";

const About = () => {
  return (
    <div>
      <div
        className="py-12 bg-cover"
        style={{
          backgroundImage: 'url("/images/dentalChair.jpg")',
          backgroundColor: "var(--secondary)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container">
          <h2 className="font-bold text-center text-3xl md:text-5xl text-white px-4">
            About
          </h2>{" "}
          <p className="max-w-[80ch] mx-auto text-center text-white pt-4 px-12 italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ex
            dolore doloribus fugiat magni sed voluptatem iusto porro eum cumque
            ratione beatae mollitia volup.
          </p>
        </div>
      </div>
      <div className="py-12 px-4 md:grid md:grid-cols-[3fr_2fr] md:gap-32 container">
        <div className="my-auto">
          <h1 className="pb-4 text-4xl md:text-5xl font-bold text-secondary">
            Hello again!
          </h1>
          <p>
            I&apos;m{" "}
            <span className="underline font-medium text-primary">John Doe</span>
            , sequi saepe a illum omnis porro quam consequatur magnam amet
            quaerat soluta nihil, illo suscipit, quasi magni provident
            laboriosam commodi tempora nesciunt? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
            <br />
            <br />
            Quasi magni provident laboriosam commodi tempora nesciunt? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.Nulla
            pellentesque, urna vitae malesuada tristique, lorem nunc pharetra
            lacus, vel accumsan ipsum odio at nibh.
            <br />
            <br /> Cras fringilla, sem non euismod suscipit, arcu nulla
            elementum tellus, at lacinia nibh sem ultrices elit. Etiam
            tincidunt.
          </p>
          <div className="my-8 bg-secondary py-16 md:py-32 px-4 md:px-8 rounded-md md:flex md:gap-4">
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
        <div className="relative">
          <div className="object-cover w-full h-full p-4 border border-primary my-auto">
            <img src="/images/Dentist.jpg" alt="Dentist" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
