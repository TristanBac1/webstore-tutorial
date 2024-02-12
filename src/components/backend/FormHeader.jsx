import { X } from "lucide-react";
import React from "react";
import Heading from "./Heading";
import { useRouter } from "next/navigation";

export default function FormHeader({ title }) {
  const router = useRouter();

  return (
    <div className="flex items-center w-full max-w-4xl  justify-between dark:bg-slate-700 p-4 mb-12 rounded-xl shadow-md mx-auto">
      <Heading title={title} />
      <button onClick={() => router.back()} className="bg-red-600 rounded-xl">
        <X />
      </button>
    </div>
  );
}
