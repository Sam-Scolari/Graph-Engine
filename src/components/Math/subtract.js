import validate from "../utils/validate.js";

export default {
  name: "Subtract",
  description: "Returns the difference of 2 numbers",
  ports: {
    in: ["number", "number"],
    out: "number",
  },
  run: async function (...input) {
    if (validate.call(this, input)) {
      return input[0] - input[1];
    }
  },
};
