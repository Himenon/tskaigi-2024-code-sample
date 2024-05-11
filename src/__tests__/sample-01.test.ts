import * as fs from "node:fs";
import { test, expect } from "vitest";
import * as Module from "../sample-01";

test("Sample1: Code Generate Test", () => {
  Module.run();

  const generateCode = fs.readFileSync("output/sample1.ts", {
    encoding: "utf-8",
  });
  expect(generateCode).toMatchSnapshot();
});
