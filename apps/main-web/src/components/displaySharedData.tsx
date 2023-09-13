"use client";

import React from "react";
import { useGmdpData } from "gmdp-data-provider";

export const DisplaySharedData = () => {
  const gmdpData = useGmdpData();
  return (
    <div className="my-10">
      <p className="font-medium">Shared data:</p>{" "}
      <div className="my-3">{JSON.stringify(gmdpData.mockApi)}</div>{" "}
      <p className="font-medium">Counter:</p>{" "}
      <div className="my-3">{JSON.stringify(gmdpData.counter)}</div>{" "}
    </div>
  );
};
