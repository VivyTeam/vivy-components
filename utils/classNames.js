export default function(...args) {
  return args.reduce((prev, index) => {
    const [className, condition = true] = index;
    if (condition) {
      return `${className} ${prev}`;
    }
    return prev;
  }, "");
}
