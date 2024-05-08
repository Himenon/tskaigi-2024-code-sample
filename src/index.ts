import * as fs from "fs";

import * as Printer from "./Printer";

const main = () => {
  const code = Printer.generateWithoutTransformer(`"Hello world !"`);
  fs.writeFileSync("output/sample1.ts", code, "utf8");
};

main();
