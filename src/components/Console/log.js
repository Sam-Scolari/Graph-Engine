export default {
  name: "Log",
  description: "Logs a value to the console",
  ports: {
    in: ["string"],
    out: "boolean",
  },
  run: async function (value) {
    console.log(value);
    return true;
  },
};
