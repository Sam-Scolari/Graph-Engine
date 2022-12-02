export default {
  name: "Time End",
  description: "Ends a console timer",
  ports: {
    in: ["string"],
    out: "boolean",
  },
  run: async function (label) {
    console.timeEnd(label);
    return true;
  },
};
