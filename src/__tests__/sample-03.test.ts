import * as fs from "node:fs";
import { test, expect } from "vitest";
import * as Module from "../sample-03";

test("Sample3: Code Generate Test", () => {
  Module.run();
  const generateCode = fs.readFileSync("output/sample3.ts", {
    encoding: "utf-8",
  });
  expect(generateCode).toMatchSnapshot();
});
