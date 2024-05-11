import * as fs from "node:fs";

import * as Printer from "./utils";

export const run = () => {
  const sourceText = `const mainTask = () => {
    const subTask = () => {}
    return subTask();
  }
  mainTask();
  `;

  const code = Printer.generateCodeByPlainText(sourceText);

  fs.writeFileSync("output/sample1.ts", code, "utf8");

  console.log("Generated output/sample1.ts");
};
