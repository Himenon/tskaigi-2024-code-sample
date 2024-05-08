import * as fs from "fs";

import * as Printer from "./Printer";

const main = () => {
  const code = Printer.generate();
  fs.writeFileSync("output/sample.ts", code, "utf8");
};

main();
