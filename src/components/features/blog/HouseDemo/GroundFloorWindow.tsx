import { Grid, GridItem } from "@chakra-ui/react";
import { WindowPane } from "./WindowPane";

export function GroundFloorWindow() {
  return (
    <Grid
      h={"50%"}
      w={"50%"}
      gridTemplateColumns={"repeat(2, 1fr)"}
      gap={1}
      bgColor={"white"}
      p={1}
      mt={5}
      border={"1px solid"}
      borderColor="gray.400"
    >
      <GridItem position={"relative"}>
        <WindowPane />
      </GridItem>
      <GridItem position={"relative"}>
        <WindowPane />
      </GridItem>
      <GridItem position={"relative"}>
        <WindowPane />
      </GridItem>
      <GridItem position={"relative"}>
        <WindowPane />
      </GridItem>
    </Grid>
  );
}
