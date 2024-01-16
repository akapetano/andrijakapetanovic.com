import dynamic from "next/dynamic";

const HouseDemo = dynamic(() => import("./House"));

export default HouseDemo;
