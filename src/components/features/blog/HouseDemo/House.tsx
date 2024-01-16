"use client";

import { RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { HouseRoof } from "./HouseRoof";
import { HouseBody } from "./HouseBody";
import { HouseFoundation } from "./HouseFoundation";
import { HouseWrapper } from "./HouseWrapper";

function House() {
  const [layer, setLayer] = useState<
    "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript"
  >("HTML");

  function handleChange(nextValue: string) {
    setLayer(nextValue as "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript");
  }

  return (
    <>
      <RadioGroup
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        value={layer}
        onChange={handleChange}
      >
        <Radio value="HTML">HTML</Radio>
        <Radio value="HTML & CSS">HTML & CSS</Radio>
        <Radio value="HTML, CSS & JavaScript">HTML, CSS & JavaScript</Radio>
      </RadioGroup>
      <HouseWrapper>
        <HouseRoof layer={layer} />
        <HouseBody layer={layer} />
        <HouseFoundation layer={layer} />
      </HouseWrapper>
    </>
  );
}

export default House;
