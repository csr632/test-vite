import React from "react";
import sharedUtils from "./shared-utils";

interface IProps {}

const Page1: React.FC<IProps> = (props) => {
  sharedUtils("Page1");
  return <div>Page1</div>;
};

export default Page1;
