"use client";
import FormHeader from "@/components/backend/FormHeader";
import ImageInput from "@/components/utilities/FormInputs/ImageInput";
import SelectInput from "@/components/utilities/FormInputs/SelectInput";
import SubmitButton from "@/components/utilities/FormInputs/SubmitButton";
import ArrayInput from "@/components/utilities/FormInputs/ArrayInput";
import TextAreaInput from "@/components/utilities/FormInputs/TextAreaInput";
import TextInput from "@/components/utilities/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "@/components/utilities/FormInputs/ToggleInput";

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const categories = [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
    { id: 3, title: "Category 3" },
    { id: 4, title: "Category 4" },
  ];

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

  async function onSubmit(data) {
    setLoading(true);
    //title SKU barcode category images[] defaultcategory price saleprice quantity tags[]
    data.tags = tags;
    data.imageUrl = imageUrl;
    data.price = parseFloat(price);
    data.slug = generateSlug(data.title);
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("");
    setTags([]);
  }

  return (
    <div className="flex flex-col">
      <FormHeader title="Add New Product" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-xl shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
          />

          <TextInput
            label="Product Price"
            name="price"
            type="number"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product Discount Price"
            name="discountPrice"
            type="number"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Quantity"
            name="quantity"
            type="number"
            register={register}
            errors={errors}
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            options={categories}
          />
          <ImageInput
            label="Product Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
          />
          <ArrayInput
            name="tags"
            items={tags}
            setItems={setTags}
            itemTitle="Tag"
          />
          <TextAreaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            register={register}
            status={isActive}
            statusName="isActive"
            title="Publish your Product"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          loadingButtonTitle="Saving Please Wait..."
          buttonTitle="Create Product"
        />
      </form>
    </div>
  );
}
