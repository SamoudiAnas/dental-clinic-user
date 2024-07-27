import Service1Icon from "@root/public/svgs/service1.svg";
import Service2Icon from "@root/public/svgs/service2.svg";
import Service3Icon from "@root/public/svgs/service3.svg";
import Service4Icon from "@root/public/svgs/service4.svg";

export const Services = () => {
  return (
    <section className="bg-secondary text-white px-4">
      <div className=" container max-w-screen-lg  py-16">
        <div className="md:grid md:grid-cols-2 md:gap-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Best Dental Services <br /> At Your Fingertips
          </h2>
          <p className="description ">
            We offer a wide range of dental services to cater to your needs. Our
            experienced team of dentists and staff are dedicated to providing
            high-quality care.
          </p>
        </div>
        <div className="mt-12 md:grid md:grid-cols-4 md:gap-6">
          <div className="my-4 py-12 px-4 border border-transparent rounded-xl">
            <Service1Icon className="w-20 h-28 overflow-visible mx-auto" />
            <h4 className="text-xl text-center mb-4 font-semibold">
              Dental Checking
            </h4>
            <div className="text-base text-center text-gray-400">
              Regular dental check-ups are essential for maintaining good oral
              health.
            </div>
          </div>
          <div className="my-4 py-12 px-4 border border-transparent rounded-xl">
            <Service3Icon className="w-20 h-28 overflow-visible mx-auto" />
            <h4 className="text-xl text-center mb-4 font-semibold">
              Tooth Setting
            </h4>
            <div className="text-base text-center text-gray-400">
              Tooth setting is a dental procedure that involves reshaping and
              recontouring the teeth to improve their appearance and function.
            </div>
          </div>
          <div className="my-4 py-12 px-4 border border-transparent rounded-xl">
            <Service2Icon className="w-20 h-28 overflow-visible mx-auto" />
            <h4 className="text-xl text-center mb-4 font-semibold">
              Dental Care
            </h4>
            <div className="text-base text-center text-gray-400">
              Our dental care services are designed to help you maintain good
              oral health and prevent dental problems.
            </div>
          </div>
          <div className="my-4 py-12 px-4 border border-transparent rounded-xl">
            <Service4Icon className="w-20 h-28 overflow-visible mx-auto" />
            <h4 className="text-xl text-center mb-4 font-semibold">
              Dental Treatment
            </h4>
            <div className="text-base text-center text-gray-400">
              If you have a dental problem that requires treatment, our team of
              dentists can help. From fillings and crowns to root canals and
              extractions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
