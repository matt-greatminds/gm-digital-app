import React from "react";
import { Button } from "ui";
import { Counter } from "../components/Counter";

export const ExploreHome = () => {
  return (
    <div>
      <h1 className="mx-auto mb-12 text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
        Explore Home
      </h1>
      <p className="mx-auto text-center">
        {" "}
        This is the main landing page for explore and is loaded as a packaged
        dependency in the GM main application.
      </p>
      <div className="flex justify-center">
        <Button href="/explore/details">Go To Details</Button>
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
};
