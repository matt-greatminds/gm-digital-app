"use client";

import React from "react";
import { useGmdpData } from "gmdp-data-provider";
export const Counter = () => {
  const { counter, increaseCounter } = useGmdpData();
  return (
    <div>
      <div>Counter: {counter}</div>
      <div
        onClick={increaseCounter}
        className="inline-block rounded-full border border-pr-170 bg-pr-170 p-3 text-n-white hover:bg-transparent hover:text-pr-170 focus:outline-none focus:ring active:text-pr-120 cursor-pointer"
      >
        <span> + Add </span>
      </div>
    </div>
  );
};
