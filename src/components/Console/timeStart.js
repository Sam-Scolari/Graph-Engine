export default {
  name: "Time Start",
  description: "Starts a console timer",
  ports: {
    in: ["string"],
    out: "boolean",
  },
  run: async function (label) {
    console.time(label);
    return true;
  },
};
