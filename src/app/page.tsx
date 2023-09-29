"use client";
import Select from "react-select";
import { categories } from "@/lib/dataSource/categories";
import { suppliers } from "@/lib/dataSource/suppliers";
import { useState } from "react";
import { json } from "stream/consumers";

export default function Home() {
  const [values, setValues] = useState();

  return (
    <>
      <h1 className="mb-6">Build an ADDWEB item</h1>
      <form action="">
        <div className="flex flex-col gap-4">
          {/* active status of product */}
          <div className="form-control">
            <label className="label cursor-pointer justify-normal gap-4">
              <span className="label-text">Active</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked
              />
            </label>
          </div>

          <div className="flex justify-between">
            {/* product reference number*/}
            <input
              className="input input-bordered input-primary"
              placeholder="Items Reference#"
              type="text"
              required
            />

            {/* product price */}
            <input
              type="number"
              className="input input-bordered input-primary"
              placeholder="price tax excluded"
            />
          </div>

          {/* Product Name/title */}
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary w-full"
          />

          {/* product Descriptions */}
          <textarea
            className="textarea textarea-primary"
            placeholder="Descriptions"
          ></textarea>

          {/* number of images. calculated based on REF# */}
          <input
            type="number"
            className="input input-bordered input-primary"
            placeholder="number of images"
          />

          {/* product categories */}
          <Select
            options={categories}
            isMulti
            placeholder={"Select Categories"}
          />

          {/* product supplier */}
          <Select
            options={suppliers}
            isClearable
            placeholder={"Select Supplier"}
          />

          {/* Select tax rule */}
          <Select
            options={[
              { label: "books", value: 2 },
              { label: "others", value: 1 },
            ]}
            isClearable
            placeholder={"select tax rule"}
          />
        </div>
      </form>
      <pre>{JSON.stringify(values)}</pre>
    </>
  );
}
