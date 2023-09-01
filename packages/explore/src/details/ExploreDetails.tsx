import React from "react";
import { Button } from "ui";

export const ExploreDetails = () => {
  return (
    <div>
      <h1 className="mx-auto mb-12 text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
        Explore Details
      </h1>
      <p className="mx-auto text-center">
        {" "}
        This is the subroute explore details page and is loaded as a packaged
        dependency in the GM main application.
      </p>
      <div className="flex justify-center">
        <Button href="/explore">Go Back</Button>
      </div>
    </div>
  );
};
