import path from "path";

export default function process(src, filename) {
  return `module.exports = ${JSON.stringify(path.basename(filename))};`;
}
