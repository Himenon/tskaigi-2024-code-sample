import * as fs from "node:fs";
import { test, expect } from "vitest";
import * as Module from "../sample-02";

test("Sample2: Code Generate Test", () => {
  Module.run();

  const generateCode = fs.readFileSync("output/sample-02.ts", {
    encoding: "utf-8",
  });
  expect(generateCode).toMatchSnapshot();
});
