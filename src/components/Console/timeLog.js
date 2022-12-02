export default {
  name: "Time Log",
  description: "Logs the current time to the console",
  ports: {
    in: ["string"],
    out: "boolean",
  },
  run: async function (label) {
    console.timeLog(label);
    return true;
  },
};
