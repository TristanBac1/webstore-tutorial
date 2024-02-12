"use client";
import FormHeader from "@/components/backend/FormHeader";
import ImageInput from "@/components/utilities/FormInputs/ImageInput";
import SubmitButton from "@/components/utilities/FormInputs/SubmitButton";
import ToggleInput from "@/components/utilities/FormInputs/ToggleInput";
import TextInput from "@/components/utilities/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function NewBanner() {
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
    router.push("/dashboard/banners");
  }

  async function onSubmit(data) {
    setLoading(true);
    data.imageUrl = imageUrl;
    makePostRequest(setLoading, "api/banners", data, "Banner", reset, redirect);
    setImageUrl("");
  }

  return (
    <div className="flex flex-col">
      <FormHeader title="Add New Banner" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-xl shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Banner Link"
            name="link"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Banner Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="bannerImageUploader"
          />
          <ToggleInput
            register={register}
            status={isActive}
            statusName="isActive"
            title="Publish your Banner"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          loadingButtonTitle="Saving Please Wait..."
          buttonTitle="Create Banner"
        />
      </form>
    </div>
  );
}
