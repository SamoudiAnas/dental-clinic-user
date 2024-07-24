import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { InputError } from "@/components/common/InputError";
import { Textarea } from "@/components/common/Textarea";
import { ContactForm, contactFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const BookWithForm = () => {
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
    <div className="bg-[rgba(247,247,247,1)]">
      <section
        style={{
          backgroundSize: "100%",
        }}
        className="py-32 bg-no-repeat px-4 text-center text-white relative z-10 bg-primary"
      >
        <h2 className="text-3xl font-semibold md:text-5xl">
          Book An Appintment Online
        </h2>
        <p className="mt-4 mb-8 mx-auto max-w-[70ch]">
          We provide the best dental care services to you and your family. We
          have the best doctors and staff to help you with your dental problems
        </p>
        <section className=" bg-white w-fit mx-auto p-8 rounded-xl">
          <form className="md:min-w-[35rem] flex flex-col" onSubmit={onSubmit}>
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
            <Button type="submit" className="w-fit" variant="secondary">
              Submit
            </Button>
          </form>
        </section>
      </section>
    </div>
  );
};
