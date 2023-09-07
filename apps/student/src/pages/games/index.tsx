import React from "react";
import { lazy } from "react";

import dynamic from "next/dynamic";

const RemotePage = dynamic(() => import("games/Games"));

const index = () => {
  return <RemotePage />;
};

export default index;
