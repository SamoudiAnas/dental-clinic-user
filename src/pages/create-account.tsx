import LoginIllustration from "@root/public/svgs/login.svg";
import { CreateAccountForm, createAccountSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

import { Input } from "@/components/common/input";
import { InputError } from "@/components/common/input-error";
import { Button, buttonVariants } from "@/components/common/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { createAccount } from "@/helpers/auth.helper";
import BasicLayout from "@/layouts/basic-layout";
import { Label } from "@/components/common/label";
import Head from "next/head";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountForm>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await createAccount(data);

      toast({
        title: "Account created successfully",
        description: "You can now login to your account",
        variant: "default",
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "An error occurred",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <BasicLayout>
      <Head>
        <title>Create Account | The Dental</title>
        <meta
          name="description"
          content="Create an account to access The Dental services and features"
        />
      </Head>
      <div className="px-4 flex justify-center flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 min-h-[90vh] items-center  pt-36 mb-20 container max-w-screen-lg">
        <LoginIllustration className="w-full h-auto" />
        <div className="p-4 md:p-8 flex flex-col rounded-xl  border shadow-xl w-full">
          <h2 className="font-semibold text-2xl md:text-4xl mb-4">
            Welcome to{" "}
            <span className="font-bold text-primary">
              <br /> The Dental
            </span>
          </h2>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          <form onSubmit={onSubmit}>
            <div className="md:grid md:grid-cols-2 gap-4 mb-3 h-fit">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  autoComplete="on"
                  placeholder="John"
                  hasError={!!errors.firstName}
                  {...register("firstName")}
                />
                <InputError>{errors.firstName?.message}</InputError>
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  placeholder="Doe"
                  hasError={!!errors.lastName}
                  {...register("lastName")}
                />
                <InputError>{errors.lastName?.message}</InputError>
              </div>
            </div>

            <div className="mb-3">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="text"
                placeholder="+234 123 456 7890"
                hasError={!!errors.phoneNumber}
                {...register("phoneNumber")}
              />
              <InputError>{errors.phoneNumber?.message}</InputError>
            </div>
            <div className="mb-3">
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                placeholder="email@example.com"
                hasError={!!errors.email}
                {...register("email")}
              />
              <InputError>{errors.email?.message}</InputError>
            </div>
            <div className="mb-3">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  hasError={!!errors.password}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-gray-600"
                >
                  {isPasswordVisible ? (
                    <EyeOff
                      className="w-6 h-6"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  ) : (
                    <Eye
                      className="w-6 h-6"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  )}
                </button>
              </div>
              <InputError>{errors.password?.message}</InputError>
            </div>
            <div className="mb-3">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  hasError={!!errors.confirmPassword}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-gray-600"
                >
                  {isConfirmPasswordVisible ? (
                    <EyeOff
                      className="w-6 h-6"
                      onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                      }
                    />
                  ) : (
                    <Eye
                      className="w-6 h-6"
                      onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                      }
                    />
                  )}
                </button>
              </div>
              <InputError>{errors.confirmPassword?.message}</InputError>
            </div>

            <Button
              fullWidth
              disabled={isLoading}
              type="submit"
              className="mt-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin mx-auto" />
              ) : (
                " Create Account"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 my-2 mt-4">
            Already have an account?
            <Link
              href="/login"
              className={buttonVariants({
                variant: "link",
                className: "px-0 pl-2 underline",
              })}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </BasicLayout>
  );
}

export default SignUp;
