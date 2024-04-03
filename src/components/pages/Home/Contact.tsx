import PhoneIcon from "@root/public/images/phone.svg";
import LocationIcon from "@root/public/images/location.svg";
import EmailIcon from "@root/public/images/email.svg";
import TimeIcon from "@root/public/images/time.svg";

export const Contact = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(247, 247, 247, 1), rgba(247, 247, 247, 1), rgba(247, 247, 247, 0), rgba(247, 247, 247, 0), rgba(255, 255, 255, 0)), url(/images/map.png)",
      }}
      className="bg-cover bg-no-repeat"
    >
      <section className="py-20 px-6 md:grid md:grid-cols-[1fr_2fr] gap-4 container">
        <div>
          <h5 className="text-primary font-medium">Now Open</h5>
          <h1 className="text-secondary font-bold text-3xl md:text-5xl my-4">
            Dental Clinic
          </h1>
          <p>
            We care about you teeth, so feel free to visit us during business
            hours.
          </p>
          <div className="flex gap-4 my-6">
            <LocationIcon className="fill-primary w-6" />
            <div>
              <h4 className="text-gray-600 font-medium">Email Address</h4>
              <p className="text-sm">
                866 Balistreri Light Suite 937, Helgatown 93810-6364
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <PhoneIcon className="fill-primary w-6" />

            <div>
              <h4 className="text-gray-600 font-medium">Phone</h4>
              <p className="text-sm">+ 504-558-3645</p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <EmailIcon className="fill-primary w-6" />
            <div>
              <h4 className="text-gray-600 font-medium">Email</h4>
              <p className="text-sm">email@contact.com</p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <TimeIcon className="fill-primary w-6" />
            <div>
              <h4 className="text-gray-600 font-medium">Openning Hours</h4>
              <p className="text-sm">Monday to Friday : 8 AM ---&gt; 4 PM</p>

              <p className="text-sm">Saturday : 8 AM ---&gt; 12 AM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
