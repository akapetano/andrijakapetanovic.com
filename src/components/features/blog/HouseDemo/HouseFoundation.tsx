import {
  Grid,
  GridItem,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

interface IHouseFoundationProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function HouseFoundation({ layer }: IHouseFoundationProps) {
  const isHTMLOnly = layer === "HTML";
  const htmlOnlybgColor = useColorModeValue("white", "gray.200");
  const bgColor = useColorModeValue("gray.600", "gray.500");
  const brickColor = useColorModeValue("gray.400", "gray.600");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return !isHTMLOnly ? (
    <Grid
      as={"footer"}
      w="100%"
      bgColor={bgColor}
      gap="0.2rem"
      h="2rem"
      border={"2px solid"}
      borderColor={"gray.900"}
      gridTemplateRows={"repeat(2, 1fr)"}
      gridTemplateColumns={{
        base: "repeat(10, 1fr)",
        md: "repeat(20, 1fr)",
      }}
      alignItems="center"
      justifyContent="center"
    >
      {isLargerThan768 ? (
        <>
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
          <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
        </>
      ) : null}
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
      <GridItem h="0.75rem" w="1.5rem" bgColor={brickColor} />
    </Grid>
  ) : (
    <Grid
      as={"footer"}
      w="100%"
      bgColor={htmlOnlybgColor}
      gap="0.2rem"
      h="2rem"
      border={"2px solid"}
      borderColor={"gray.900"}
      gridTemplateRows={"repeat(2, 1fr)"}
      gridTemplateColumns={{
        base: "repeat(10, 1fr)",
        md: "repeat(20, 1fr)",
      }}
      alignItems="center"
      justifyContent="center"
    ></Grid>
  );
}
