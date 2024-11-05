import dynamic from "next/dynamic";

const ColorsDemo = dynamic(() => import("./Colors"));

export default ColorsDemo;
