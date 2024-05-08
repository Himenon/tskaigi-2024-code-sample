import * as fs from "fs";

import * as Printer from "./Printer";

const sourceText = `const mainTask = () => {
  const subTask = () => {}
  return subTask();
}
mainTask();

`;

const main = () => {
  const code = Printer.generateWithoutTransformer(sourceText);
  fs.writeFileSync("output/sample1.ts", code, "utf8");
};

main();
