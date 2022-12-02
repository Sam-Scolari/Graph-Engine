import add from "../components/add.js";
import divide from "../components/divide.js";
import multiply from "../components/multiply.js";
import subtract from "../components/subtract.js";

export default function TestGraph(a, b, c, d, e, f) {
  return {
    name: "My Graph #2",
    description: "Performs even more calculations",
    processes: {
      j3fd8z: add,
      lemn48: subtract,
      md8cbh: add,
      dunsaa: multiply,
      x8ahda: divide,
      qnfdsw: subtract,
    },
    out: "qnfdsw",
    connections: {
      j3fd8z: [a, b],
      lemn48: [c, d],
      md8cbh: [e, f],
      dunsaa: ["j3fd8z", "lemn48"],
      x8ahda: ["lemn48", "md8cbh"],
      qnfdsw: ["dunsaa", "x8ahda"],
    },
  };
}
