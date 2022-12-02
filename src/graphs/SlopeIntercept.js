import add from "../components/add.js";
import multiply from "../components/multiply.js";

export default function SlopeIntercept(m, x, b) {
  return {
    name: "Slope Intercept",
    description: "Solves for (y) in the equation (y=mx+b)",
    processes: {
      j3fd8z: multiply,
      lemn48: add,
    },
    out: "lemn48",
    connections: {
      j3fd8z: [m, x],
      lemn48: ["j3fd8z", b],
    },
  };
}
