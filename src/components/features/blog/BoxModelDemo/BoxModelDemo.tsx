import dynamic from "next/dynamic";

const BoxModelDemo = dynamic(() => import("./BoxModel"));

export default BoxModelDemo;
