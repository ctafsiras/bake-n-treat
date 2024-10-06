"use client";

import SignUpIllustration from "@/../public/assets/images/signup-illustration.webp";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import SocialLogin from "./SocialLogin";

const RegisterForm = ({ changeMethod }: { changeMethod: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    axios
      .post("/api/register", data)
      .then(() => {
        signIn("credentials", {
          ...data,
          redirect: false,
        }).finally(() => {
          setIsLoading(false);
          router.push("/menu");
        });
      })
      .catch((err) => {
        toast.error(err.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="flex items-center flex-col md:flex-row md:px-10 font-sans">
      <div className="md:w-1/2 w-full p-4 md:p-8">
        <h1 className="text-3xl text-center md:text-left font-bold text-gray-800 mb-4">
          Create New Account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            {...register("name", {
              required: true,
              maxLength: 30,
            })}
            required
            label="Name"
            disabled={isLoading}
            variant="underlined"
            color={errors.name ? "danger" : "default"}
            errorMessage={errors.name && "Please enter a valid name"}
          />
          <Input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
            required
            label="Email"
            disabled={isLoading}
            variant="underlined"
            color={errors.email ? "danger" : "default"}
            errorMessage={errors.email && "Please enter a valid email"}
          />
          <Input
            type={isPassVisible ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            required
            label="Password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setIsPassVisible(!isPassVisible)}
              >
                {isPassVisible ? (
                  <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <IoEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            disabled={isLoading}
            variant="underlined"
            color={errors.password ? "danger" : "default"}
            errorMessage={errors.password && "Please enter a valid password"}
          />
          <Input
            type={isConfirmPassVisible ? "text" : "password"}
            {...register("confirmPassword", {
              required: true,
              minLength: 8,
            })}
            required
            label="Confirm Password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setIsConfirmPassVisible(!isConfirmPassVisible)}
              >
                {isConfirmPassVisible ? (
                  <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <IoEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            disabled={isLoading}
            variant="underlined"
            color={errors.confirmPassword ? "danger" : "default"}
            errorMessage={
              errors.confirmPassword && "Please enter a valid confirm password"
            }
          />
          <div className="flex items-center justify-between space-x-2">
            <Button
              type="submit"
              className={`bg-orange-500 text-white font-bold px-4 py-2 rounded-md hover:bg-orange-600 disabled:bg-orange-200 disabled:text-gray-500
							${isLoading && "cursor-not-allowed"}
							`}
              disabled={isLoading}
              isLoading={isLoading}
            >
              Register
            </Button>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <span className="text-gray-600">Already have an account?</span>
            <Button
              type="button"
              className="text-gray-600 font-bold px-4 py-2 rounded-md hover:bg-gray-200 flex items-center"
              onClick={changeMethod}
              disabled={isLoading}
            >
              Login
            </Button>
          </div>
        </form>
        <SocialLogin />
      </div>
      <div className="md:w-1/2 w-full p-4 md:p-8 hidden md:block">
        <Image
          src={SignUpIllustration}
          alt="Waffles"
          width={800}
          height={600}
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
