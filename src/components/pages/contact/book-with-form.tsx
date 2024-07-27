import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { InputError } from "@/components/common/input-error";
import { Textarea } from "@/components/common/textarea";
import { API_URL } from "@/constants/api";
import { toast } from "@/hooks/use-toast";
import { ContactForm, contactFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const BookWithForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await axios.post(`${API_URL}/contact`, data);

      toast({
        title: "Message Sent",
        description: "We will get back to you soon",
        variant: "default",
      });

      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
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
        <h2 className="text-3xl font-semibold md:text-5xl">Contact Us</h2>
        <p className="mt-4 mb-8 mx-auto max-w-[70ch]">
          We provide the best dental care services to you and your family. We
          have the best doctors and staff to help you with your dental problems
        </p>
        <section className=" bg-white w-full md:w-fit mx-auto p-4 md:p-8 rounded-xl shadow-xl">
          <form
            className="md:min-w-[35rem] flex flex-col justify-start"
            onSubmit={onSubmit}
          >
            <div className="mb-3">
              <label
                htmlFor="fullName"
                className="font-semibold text-gray-800 mb-2 text-sm text-start block"
              >
                Full Name *
              </label>
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
              <label
                htmlFor="email"
                className="font-semibold text-gray-800 mb-2 text-sm text-start block"
              >
                Email Address
              </label>
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
              <label
                htmlFor="phoneNumber"
                className="font-semibold text-gray-800 mb-2 text-sm text-start block"
              >
                Phone Number *
              </label>
              <Input
                type="text"
                placeholder="Phone Number"
                aria-label="Phone Number"
                hasError={Boolean(errors.phoneNumber)}
                className="bg-transparent"
                {...register("phoneNumber")}
              />
              <InputError>{errors.phoneNumber?.message}</InputError>
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className="font-semibold text-gray-800 mb-2 text-sm text-start block"
              >
                Your Message *
              </label>
              <Textarea
                rows={7}
                aria-label="Your Message"
                placeholder="Your Message"
                hasError={Boolean(errors.message)}
                className="bg-transparent"
                {...register("message")}
              />
              <InputError>{errors.message?.message}</InputError>
            </div>
            <Button
              type="submit"
              className="w-fit"
              variant="secondary"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </section>
      </section>
    </div>
  );
};
