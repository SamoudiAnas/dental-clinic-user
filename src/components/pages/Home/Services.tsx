import Service1Icon from "@root/public/images/service1.svg";
import Service2Icon from "@root/public/images/service2.svg";
import Service3Icon from "@root/public/images/service3.svg";
import Service4Icon from "@root/public/images/service4.svg";

export const Services = () => {
  return (
    <section className="bg-secondary text-white">
      <div className="container py-16">
        <div className="md:grid md:grid-cols-2 md:gap-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Best Dental Services <br /> At Your Fingertips
          </h2>
          <p className="description ">
            We offer a wide range of dental services to cater to your needs. Our
            experienced team of dentists and staff are dedicated to providing
            high-quality care and ensuring your comfort. Whether you need a
            routine dental check-up, dental care, tooth setting, or dental
            treatment, we have you covered.
          </p>
        </div>
        <div className="mt-12 md:grid md:grid-cols-4 md:gap-6">
          <div className="my-4 py-12 px-4 border border-transparent hover:border-white hover:bg-zinc-900/20 rounded-xl">
            <Service1Icon className="w-20 h-28 overflow-visible mx-auto" />
            <h4 className="text-xl text-center mb-4 font-semibold">
              Dental Checking
            </h4>
            <div className="text-base text-center text-gray-400z">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quo obcaecati rem ad nam fugiat alias qui nemo nihil nostrum.
            </div>
          </div>
          <div className="my-4 py-12 px-4 border border-transparent hover:border-white hover:bg-zinc-900/20 rounded-xl">
            <Service2Icon className="w-20 h-28 overflow-visible mx-auto" />
            <h4 className="text-xl text-center mb-4 font-semibold">
              Dental Care
            </h4>
            <div className="text-base text-center text-gray-400z">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quo obcaecati rem ad nam fugiat alias qui nemo nihil nostrum.
            </div>
          </div>
          <div className="my-4 py-12 px-4 border border-transparent hover:border-white hover:bg-zinc-900/20 rounded-xl">
            <Service3Icon className="w-20 h-28 overflow-visible mx-auto" />
            <h4 className="text-xl text-center mb-4 font-semibold">
              Tooth Setting
            </h4>
            <div className="text-base text-center text-gray-400z">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quo obcaecati rem ad nam fugiat alias qui nemo nihil nostrum.
            </div>
          </div>
          <div className="my-4 py-12 px-4 border border-transparent hover:border-white hover:bg-zinc-900/20 rounded-xl">
            <Service4Icon className="w-20 h-28 overflow-visible mx-auto" />
            <h4 className="text-xl text-center mb-4 font-semibold">
              Dental Treatment
            </h4>
            <div className="text-base text-center text-gray-400z">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quo obcaecati rem ad nam fugiat alias qui nemo nihil nostrum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
