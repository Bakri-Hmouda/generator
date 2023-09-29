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

  // main URL
  const URL = "https://files.catalogsolutions.com/sonsuh/";

  //   store images links values
  const [data, setData] = useState("");

  // set Reference Number
  const [reference, setReference] = useState("");

  // set images number
  const [number, setNumber] = useState(1);

  // set suffix
  const [suffix, setSuffix] = useState(".alt");

  //   trigger copy button style
  const [copied, setCopied] = useState(false);

  // generate Links
  function generateLink() {
    if (reference === "") {
      alert("please input an reference number");
      return;
    }
    const data = [];
    for (let i = 0; i < number; i++) {
      console.log(i);
      if (i === 0) {
        data.push(URL + reference + ".jpg");
      } else {
        data.push(URL + reference + suffix + i + ".jpg");
      }
    }
    const result = data.join("|");
    setData(result);
  }

  // handle change of Reference field
  function handleRefChange(e: any) {
    setReference(e.target.value);
  }
  // handle change of number field
  function handleNumberChange(e: any) {
    setNumber(e.target.value);
  }

  //   handle change of suffix field
  function handleSuffixChange(e: any) {
    setSuffix(e.target.value);
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

  const handleCtrlV = (e: any) => {
    // check if the ctrl key and the V key are pressed
    if ((e.ctrlKey || e.metaKey) && e.key === "c") {
      // do something with the clipboard data

      handleCopy();
    }
  };

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-12">Generate Images Links</h1>

      <form action="" className="flex gap-4 justify-around mb-1 flex-wrap">
        {/* reference */}
        <label>
          Reference#
          <input
            type="text"
            placeholder="REF NUMBER"
            className="rounded mx-2 px-4 py-2"
            value={reference}
            onChange={handleRefChange}
          />
        </label>

        {/* number of images */}
        <label>
          number of image/s
          <input
            type="Number"
            className="rounded mx-2 px-4 py-2"
            value={number}
            onChange={handleNumberChange}
          />
        </label>

        {/* suffix */}
        <label>
          Suffix
          <input
            type="text"
            placeholder="suffix"
            className="rounded mx-2 px-4 py-2"
            value={suffix}
            onChange={handleSuffixChange}
          />
        </label>
      </form>
      <div className="bg-gray-700 my-6 h-0.5 rounded" />

      <div className="flex justify-end mb-2">
        <button
          onClick={generateLink}
          className="rounded px-4 py-2 font-bold  w-28 border border-red-400 mx-4"
        >
          Generate
        </button>
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
