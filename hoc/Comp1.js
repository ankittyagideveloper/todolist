import React from "react";
import hoc from "./hoc";

function Comp1() {
  return <div>Comp1 hoc1</div>;
}

export default hoc(Comp1);
