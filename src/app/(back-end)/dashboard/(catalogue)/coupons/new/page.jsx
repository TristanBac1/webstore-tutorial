"use client";
import FormHeader from "@/components/backend/FormHeader";
import SubmitButton from "@/components/utilities/FormInputs/SubmitButton";
import TextInput from "@/components/utilities/FormInputs/TextInput";
import ToggleInput from "@/components/utilities/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateIsoFormattedDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCoupon() {
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
    router.push("/dashboard/coupons");
  }

  async function onSubmit(data) {
    setLoading(true);
    data.validDate = generateIsoFormattedDate(data.validDate);
    data.code = data.code.toUpperCase();
    console.log(data);
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect);
  }

  return (
    <div className="flex flex-col">
      <FormHeader title="Add New Coupon" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-xl shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Coupon Code"
            name="code"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Valid Until Date"
            name="validDate"
            type="date"
            register={register}
            errors={errors}
          />
          <ToggleInput
            register={register}
            status={isActive}
            statusName="isActive"
            title="Publish your Coupon"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          loadingButtonTitle="Saving Please Wait..."
          buttonTitle="Create Coupon"
        />
      </form>
    </div>
  );
}
