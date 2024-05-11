import * as fs from "node:fs";
import { test, expect } from "vitest";

test("Sample2: Code Generate Test", () => {
  const generateCode = fs.readFileSync("output/sample2.ts", {
    encoding: "utf-8",
  });
  expect(generateCode).toMatchSnapshot();
});
