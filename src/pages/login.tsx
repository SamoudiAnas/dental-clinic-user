import React, { useState } from "react";
import Link from "next/link";
import authBg from "@root/public/images/authbg.jpg";
import { LoginForm, loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/common/Input";
import { InputError } from "@/components/common/InputError";
import { Button, buttonVariants } from "@/components/common/Button";
import { Loader2 } from "lucide-react";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
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
    <div className="flex justify-center flex-col min-h-[70vh] bg-zinc-50">
      <div className="px-8 py-8 lg:max-w-lg mx-auto">
        <h2 className="text-center text-2xl md:text-4xl mb-8">Welcome Back!</h2>
        <form onSubmit={onSubmit}>
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
            <Input
              type="password"
              placeholder="Password"
              hasError={!!errors.password}
              {...register("password")}
            />
            <InputError>{errors.password?.message}</InputError>
          </div>

          <Button fullWidth disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin mx-auto" /> : "Login"}
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
  );
}

export default Login;
