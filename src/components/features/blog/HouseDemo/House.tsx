"use client";

import { RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { HouseRoof } from "./HouseRoof";
import { HouseBody } from "./HouseBody";
import { HouseFoundation } from "./HouseFoundation";
import { HouseWrapper } from "./HouseWrapper";

function House() {
  const [layer, setLayer] = useState("HTML");

  return (
    <>
      <RadioGroup
        onChange={setLayer}
        value={layer}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Radio value="HTML">HTML</Radio>
        <Radio value="HTML & CSS">HTML & CSS</Radio>
        <Radio value="HTML, CSS & JavaScript">HTML, CSS & JavaScript</Radio>
      </RadioGroup>
      <HouseWrapper>
        <HouseRoof />
        <HouseBody />
        <HouseFoundation />
      </HouseWrapper>
    </>
  );
}

export default House;
