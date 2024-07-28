import LoginIllustration from "@root/public/svgs/login.svg";
import Link from "next/link";
import React, { useState } from "react";
import { LoginForm, loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/common/input";
import { InputError } from "@/components/common/input-error";
import { Button, buttonVariants } from "@/components/common/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { login } from "@/helpers/auth.helper";
import { toast } from "@/hooks/use-toast";
import BasicLayout from "@/layouts/basic-layout";
import { Label } from "@/components/common/label";
import Head from "next/head";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await login(data);

      toast({
        title: "Login successful",
        description: "Welcome back!",
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
        <title>Login | The Dental</title>
        <meta
          name="description"
          content="Login to your account to book appointments and manage your profile."
        />
      </Head>
      <div className="px-4 flex justify-center flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 min-h-[80vh] items-center   container max-w-screen-lg">
        <LoginIllustration className="w-full h-auto" />
        <div className="p-4 md:p-8 flex flex-col rounded-xl border shadow-xl w-full">
          <h2 className="font-semibold text-2xl md:text-4xl mb-4">
            Welcome Back!
          </h2>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <div className="relative">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  placeholder="Email Address"
                  hasError={!!errors.email}
                  {...register("email")}
                />
              </div>
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
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {isPasswordVisible ? (
                    <EyeOff
                      className="size-4"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  ) : (
                    <Eye
                      className="size-4"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  )}
                </button>
              </div>
              <InputError>{errors.password?.message}</InputError>
            </div>

            <Button
              type="submit"
              fullWidth
              disabled={isLoading}
              className="mt-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin mx-auto" />
              ) : (
                "Login"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 my-2">
            New to The Dental?
            <Link
              href="/create-account"
              className={buttonVariants({
                variant: "link",
                className: "text-primary px-0 pl-1 underline",
              })}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </BasicLayout>
  );
}

export default Login;
