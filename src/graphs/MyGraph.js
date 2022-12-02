import add from "../components/add.js";
import divide from "../components/divide.js";
import multiply from "../components/multiply.js";
import { Graph } from "./types";

export default function MyGraph(x, y, z) {
  return {
    name: "My Graph",
    description: "Performs some calculations",
    processes: {
      j3fd8z: add,
      lemn48: divide,
      md8cbh: multiply,
    },
    out: "md8cbh",
    connections: {
      j3fd8z: [x, y],
      lemn48: [y, z],
      md8cbh: ["j3fd8z", "lemn48"],
    },
  };
}
