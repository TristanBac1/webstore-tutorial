"use client";
import FormHeader from "@/components/backend/FormHeader";
import ImageInput from "@/components/utilities/FormInputs/ImageInput";
import SubmitButton from "@/components/utilities/FormInputs/SubmitButton";
import TextAreaInput from "@/components/utilities/FormInputs/TextAreaInput";
import TextInput from "@/components/utilities/FormInputs/TextInput";
import ToggleInput from "@/components/utilities/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/categories");
  }

  async function onSubmit(data) {
    setLoading(true);
    data.slug = generateSlug(data.title);
    data.imageUrl = imageUrl;
    makePostRequest(
      setLoading,
      "api/categories",
      data,
      "Category",
      reset,
      redirect
    );
    setImageUrl("");
  }

  return (
    <div className="flex flex-col">
      <FormHeader title="Add New Category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-xl shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextAreaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Category Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
          />
          <ToggleInput
            register={register}
            status={isActive}
            statusName="isActive"
            title="Publish your Category"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          loadingButtonTitle="Saving Please Wait..."
          buttonTitle="Create Category"
        />
      </form>
    </div>
  );
}
