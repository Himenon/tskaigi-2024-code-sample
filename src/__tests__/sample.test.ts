import * as fs from "node:fs";
import { test, expect } from "vitest";

test("Code Generate Test", () => {
  const generateCode = fs.readFileSync("generated.ts", { encoding: "utf-8" });
  expect(generateCode).toMatchSnapshot();
});
