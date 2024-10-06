"use client";

import SigninIllustration from "@/../public/assets/images/signin-illustration.jpg";
import { signIn } from "next-auth/react";

import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import SocialLogin from "./SocialLogin";

const LoginForm = ({ changeMethod }: { changeMethod: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const fillCredentials = (userType: string) => {
    if (userType === "admin") {
      setValue("email", "admin@example.com");
      setValue("password", "11111111");
    } else if (userType === "user") {
      setValue("email", "user@example.com");
      setValue("password", "11111111");
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback.error);
        }
        if (callback?.ok && !callback?.error) {
          router.push("/menu");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="flex items-center flex-col md:flex-row md:px-10 font-sans">
      <div className="md:w-1/2 w-full p-4 md:p-8 hidden md:block">
        <Image
          src={SigninIllustration}
          alt="Waffles"
          width={800}
          height={600}
          className="rounded-md object-cover"
        />
      </div>
      <div className="md:w-1/2 w-full p-4 md:p-8">
        <h1 className="text-3xl text-center md:text-left font-bold text-gray-800 mb-4">
          Login To Your Account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            {...register("email", {
              required: true,
            })}
            required
            label="Email"
            disabled={isLoading}
            variant="underlined"
            color={errors.email ? "danger" : "default"}
            errorMessage={errors.email && "Please enter a valid email"}
          />
          <Input
            type={isVisible ? "text" : "password"}
            {...register("password", {
              required: true,
            })}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <IoEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            required
            label="Password"
            disabled={isLoading}
            variant="underlined"
            color={errors.password ? "danger" : "default"}
          />
          <div>
            Fill with{" "}
            <span
              className="text-white p-0.5 px-1 rounded-lg bg-orange-500  cursor-pointer"
              onClick={() => fillCredentials("user")}
            >
              User
            </span>{" "}
            or{" "}
            <span
              className="text-white p-0.5 px-1 rounded-lg bg-orange-500  cursor-pointer"
              onClick={() => fillCredentials("admin")}
            >
              Admin
            </span>{" "}
            credential.
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Button
              type="submit"
              className={`bg-orange-500 text-white font-bold px-4 py-2 rounded-md hover:bg-orange-600 disabled:bg-orange-200 disabled:text-gray-500
							${isLoading && "cursor-not-allowed"}
							`}
              disabled={isLoading}
              isLoading={isLoading}
            >
              Login
            </Button>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <span className="text-gray-600">Don&rsquo;t have an account?</span>
            <Button
              type="button"
              className="text-gray-600 font-bold px-4 py-2 rounded-md hover:bg-gray-200 flex items-center"
              onClick={changeMethod}
              disabled={isLoading}
            >
              Register
            </Button>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <span className="text-gray-600">Forgot Password?</span>
            <Button
              type="button"
              className="text-gray-600 font-bold px-4 py-2 rounded-md hover:bg-gray-200 flex items-center"
            >
              Reset
            </Button>
          </div>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default LoginForm;
