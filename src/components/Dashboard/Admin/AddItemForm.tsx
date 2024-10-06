"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddItemForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      image: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/products", data)
      .then((res) => {
        toast.success("Product added successfully");
        reset();
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data);
        setIsLoading(false);
      });
  };
  return (
    <form
      className="w-1/2 mx-auto font-sans mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        id="name"
        {...register("name", {
          required: true,
          maxLength: 30,
        })}
        variant="bordered"
        label="Name"
        disabled={isLoading}
        color={errors.name ? "danger" : "success"}
        errorMessage={errors.name && "Name is required"}
        className="mb-3"
      />
      <Input
        type="number"
        id="price"
        {...register("price", {
          required: true,
          valueAsNumber: true,
          validate: (value) => value > 0,
        })}
        variant="bordered"
        label="Price"
        disabled={isLoading}
        color={errors.price ? "danger" : "success"}
        errorMessage={errors.price && "Price is required"}
        className="mb-3"
      />
      <Input
        type="url"
        id="image"
        {...register("image", {
          required: true,
        })}
        variant="bordered"
        label="Image"
        disabled={isLoading}
        color={errors.image ? "danger" : "success"}
        errorMessage={errors.image && "Image is required"}
        className="mb-3"
      />
      <Textarea
        id="description"
        variant="bordered"
        label="Description"
        {...register("description", {
          required: true,
        })}
        disabled={isLoading}
        className="col-span-12 md:col-span-6 mb-6"
        color={errors.description ? "danger" : "success"}
        errorMessage={errors.description && "Description is required"}
      />
      <Button
        type="submit"
        className={`bg-orange-500 text-white font-bold px-4 py-2 rounded-md hover:bg-orange-600 disabled:bg-orange-200 disabled:text-gray-500
							${isLoading && "cursor-not-allowed"}
							`}
        disabled={isLoading}
        isLoading={isLoading}
      >
        Add Product
      </Button>
    </form>
  );
};

export default AddItemForm;
