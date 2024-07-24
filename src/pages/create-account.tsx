import { CreateAccountForm, createAccountSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

import { Input } from "@/components/common/Input";
import { InputError } from "@/components/common/InputError";
import { Button, buttonVariants } from "@/components/common/Button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { createAccount } from "@/helpers/auth.helper";
import BasicLayout from "@/layouts/basic-layout";

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
      <div className="flex justify-center flex-col min-h-[70vh] bg-zinc-50 mt-20">
        <div className="container px-12 py-4 lg:max-w-lg">
          <h2 className="text-center text-2xl md:text-4xl mb-8">
            Welcome to{" "}
            <span className="font-bold text-primary">
              <br /> The Dental
            </span>
          </h2>
          <form onSubmit={onSubmit}>
            <div className="md:grid md:grid-cols-2 gap-4 mb-3 h-fit">
              <div>
                <Input
                  type="text"
                  autoComplete="on"
                  placeholder="First Name"
                  hasError={!!errors.firstName}
                  {...register("firstName")}
                />
                <InputError>{errors.firstName?.message}</InputError>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Last Name"
                  hasError={!!errors.lastName}
                  {...register("lastName")}
                />
                <InputError>{errors.lastName?.message}</InputError>
              </div>
            </div>

            <div className="mb-3">
              <Input
                type="text"
                placeholder="Phone Number"
                hasError={!!errors.phoneNumber}
                {...register("phoneNumber")}
              />
              <InputError>{errors.phoneNumber?.message}</InputError>
            </div>
            <div className="mb-3">
              <Input
                type="email"
                placeholder="Email Address"
                hasError={!!errors.email}
                {...register("email")}
              />
              <InputError>{errors.email?.message}</InputError>
            </div>
            <div className="mb-3">
              <div className="relative">
                <Input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  hasError={!!errors.password}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 -translate-y-1/2"
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
              <div className="relative">
                <Input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  hasError={!!errors.confirmPassword}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 -translate-y-1/2"
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

            <Button fullWidth disabled={isLoading} type="submit">
              {isLoading ? (
                <Loader2 className="animate-spin mx-auto" />
              ) : (
                " Create Account"
              )}
            </Button>
          </form>

          <p className="text-center my-2">
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
