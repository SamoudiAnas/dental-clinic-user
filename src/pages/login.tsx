import Link from "next/link";
import React, { useState } from "react";
import { LoginForm, loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/common/Input";
import { InputError } from "@/components/common/InputError";
import { Button, buttonVariants } from "@/components/common/Button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { login } from "@/helpers/auth.helper";
import { toast } from "@/hooks/use-toast";
import BasicLayout from "@/layouts/basic-layout";

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
      <div className="flex justify-center flex-col min-h-[70vh] bg-zinc-50 pt-20">
        <div className="px-8 py-8 lg:max-w-lg mx-auto">
          <h2 className="text-center text-2xl md:text-4xl mb-8">
            Welcome Back!
          </h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <div className="relative">
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

            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="animate-spin mx-auto" />
              ) : (
                "Login"
              )}
            </Button>
          </form>

          <p className="text-center my-2">
            New to The Dental?
            <Link
              href="/create-account"
              className={buttonVariants({
                variant: "link",
                className: "text-primary px-0 pl-2 underline",
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
