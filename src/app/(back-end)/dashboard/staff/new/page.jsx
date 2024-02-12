"use client";

import FormHeader from "@/components/backend/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import SubmitButton from "@/components/utilities/FormInputs/SubmitButton";
import { useForm } from "react-hook-form";
import TextInput from "@/components/utilities/FormInputs/TextInput";
import TextAreaInput from "@/components/utilities/FormInputs/TextAreaInput";
import { useRouter } from "next/navigation";
import { generateIsoFormattedDate } from "@/lib/utils";

export default function NewFarmer() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/staff");
  }
  async function onSubmit(data) {
    data.dob = generateIsoFormattedDate(data.dob);
    console.log(data);
    makePostRequest(setLoading, "api/staff", data, "Staff", reset, redirect);
  }
  return (
    <div>
      <FormHeader title="New Staff" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-xl shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Phone Number"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Residential Address"
            name="address"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Date of Birth"
            name="dob"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextAreaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          loadingButtonTitle="Saving Please Wait..."
          buttonTitle="Create Staff"
        />
      </form>
    </div>
  );
}
