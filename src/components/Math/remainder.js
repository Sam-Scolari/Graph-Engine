import validate from "../utils/validate.js";

export default {
  name: "Remainder",
  description: "Returns the remainder of 2 numbers",
  ports: {
    in: ["number", "number"],
    out: "number",
  },
  run: async function (...input) {
    if (validate.call(this, input)) {
      return input[0] % input[1];
    }
  },
};
