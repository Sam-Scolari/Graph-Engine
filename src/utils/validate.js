export default function validate(input) {
  this.ports.in.forEach((port, index) => {
    if (typeof input[index] !== this.ports.in[index]) {
      throw new Error(
        `TypeError: Invalid params "${typeof input[index]}" !== "${
          this.ports.in[index]
        }"`
      );
    }
  });
  return true;
}
