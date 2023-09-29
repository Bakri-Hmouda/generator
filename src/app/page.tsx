"use client";
import Select from "react-select";
import { categories } from "@/lib/dataSource/categories";
import { suppliers } from "@/lib/dataSource/suppliers";
import { useState } from "react";
import { json } from "stream/consumers";

export default function Home() {
  const [values, setValues] = useState();

  return (
    <div className="h-[400px] flex justify-center items-center">
      <div>
        <h1 className="text-7xl font-bold">Welcome to the Generator</h1>
        <p className="text-center text-gray-400">
          Please click one of the button above to get started.
        </p>
      </div>
    </div>
  );
}
