import * as fs from "node:fs";

import * as Printer from "./utils";

export const run = () => {
  const sourceText = `const mainTask1 = () => {
    const subTask = () => {}
    return subTask();
  }
  mainTask1();
  // SampleCode
  `;

  const code = Printer.generateCodeByPlainText(sourceText);

  fs.writeFileSync("output/sample-01.ts", code, "utf8");

  console.log("Generated output/sample-01.ts");
};
