"use client";

import React, { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import { categories } from "@/lib/dataSource/categories";
import { log } from "console";

interface Props {}

function Page(props: Props) {
  const {} = props;

  useEffect(() => {
    // add the event listener to the document object
    document.addEventListener("keydown", handleCtrlV);

    // return a function that removes the event listener
    return () => {
      document.removeEventListener("keydown", handleCtrlV);
    };
  });

  //   store categories values
  const [data, setData] = useState("");

  //   trigger copy button style
  const [copied, setCopied] = useState(false);

  //   handle change of input field
  function handleChange(data) {
    const categories = data.map((item) => item.value);
    const stringResult = categories.join("|");
    setData(stringResult);
  }

  //   handle copy button click
  function handleCopy() {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        setCopied(true);
      })
      .then(() => {
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((e) => console.log(e));
  }

  const handleCtrlV = (e) => {
    // check if the ctrl key and the V key are pressed
    if ((e.ctrlKey || e.metaKey) && e.key === "c") {
      // do something with the clipboard data

      handleCopy();
    }
  };

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-4">Categories Selection</h1>

      <div className="text-black">
        <Select
          instanceId={"selectCategory"}
          classNamePrefix={"select"}
          options={categories}
          isMulti
          placeholder={"select the required categories"}
          onChange={handleChange}
          className="mb-8"
        />
      </div>

      <div className="flex justify-end mb-2">
        <button
          className={`rounded px-4 py-2 font-bold  w-28 border border-gray-50
        ${copied ? "bg-green-500 text-black" : "bg-inherit"}`}
          onClick={handleCopy}
        >
          {copied ? "COPIED!" : "COPY"}
        </button>
      </div>
      <pre className="bg-gray-900  text-green-600 h-44 p-4 rounded whitespace-pre-wrap break-words ">
        {data}
      </pre>
      <p>You can also use control+c to copy the text.</p>
    </div>
  );
}

export default Page;
