"use client";

import React from "react";
import { useGmdpData } from "gmdp-data-provider";
export const Counter = () => {
  const { increaseCounter } = useGmdpData();
  return (
    <div
      onClick={increaseCounter}
      className="inline-block rounded-full border border-witWisdom-80 bg-witWisdom-80 p-3 text-n-white hover:bg-transparent hover:text-witWisdom-80 focus:outline-none focus:ring active:text-witWisdom-20 cursor-pointer"
    >
      <span> + Add </span>
    </div>
  );
};
