import * as fs from "node:fs";
import { test, expect } from "vitest";

test("Sample1: Code Generate Test", () => {
  const generateCode = fs.readFileSync("output/sample1.ts", {
    encoding: "utf-8",
  });
  expect(generateCode).toMatchSnapshot();
});
