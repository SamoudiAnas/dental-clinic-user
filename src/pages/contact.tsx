import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { InputError } from "@/components/common/InputError";
import { Textarea } from "@/components/common/Textarea";
import { Contact } from "@/components/pages/Home/Contact";
import { ContactForm, contactFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function contact() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = handleSubmit((data) => {
    try {
      setIsLoading(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <main>
      <Contact />
      <div className="bg-secondary py-16 md:py-24">
        <section className=" bg-white w-fit mx-auto p-8 rounded-xl">
          <h2 className=" font-bold mb-4 text-3xl md:text-4xl">
            Send me a <span className="text-primary underline">message</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-[45ch]">
            I'm always open to discussing product design work or partnership
            opportunities.
          </p>
          <form className="md:min-w-[35rem] " onSubmit={onSubmit}>
            <div className="mb-3">
              <Input
                type="text"
                placeholder="Full Name"
                aria-label="Full Name"
                hasError={Boolean(errors.fullName)}
                className="bg-transparent"
                {...register("fullName")}
              />
              <InputError>{errors.fullName?.message}</InputError>
            </div>
            <div className="mb-3">
              <Input
                type="text"
                placeholder="Phone Number"
                aria-label="Phone Number"
                hasError={Boolean(errors.phoneNumber)}
                className="bg-transparent"
                {...register("phoneNumber")}
              />
              <InputError>{errors.email?.message}</InputError>
            </div>
            <div className="mb-3">
              <Input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                hasError={Boolean(errors.email)}
                className="bg-transparent"
                {...register("email")}
              />
              <InputError>{errors.email?.message}</InputError>
            </div>
            <div className="mb-3">
              <Textarea
                rows={7}
                aria-label="Your Message"
                placeholder="Your Message"
                hasError={Boolean(errors.message)}
                className="bg-transparent"
                {...register("message")}
              />
              <InputError>{errors.email?.message}</InputError>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default contact;
