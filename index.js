import TestGraph from "./src/graphs/TestGraph.js";

async function traverse(currentNode) {
  let params = [];

  for (const value of this.connections[currentNode]) {
    if (this.processes[value]) {
      params.push(
        this.processes[value].run(
          ...(await Promise.all(await traverse.call(this, value)))
        )
      );
    } else params.push(value);
  }

  return params;
}

async function execute(graph) {
  return graph.processes[graph.out].run(
    ...(await Promise.all(await traverse.call(graph, graph.out)))
  );
}

console.time("time");
execute(TestGraph(1, 2, 3, 4, 5, 6)).then((output) => {
  console.log("Graph output: ", output);
  console.timeEnd("time");
});
