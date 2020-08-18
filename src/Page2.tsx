import React from "react";
import sharedUtils from "./shared-utils";

interface IProps {}

const Page2: React.FC<IProps> = (props) => {
  sharedUtils("Page2");
  return <div>Page2</div>;
};

export default Page2;
