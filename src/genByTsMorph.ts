import { Project, ts } from "ts-morph";

import * as fs from "fs";

import * as Printer from "./Printer";

const factory = ts.factory;

const sourceText = `const mainTask = () => {
  const subTask = () => {}
  return subTask();
}
mainTask();

`;

const main = () => {
  const project = new Project();
  const sourceFile = project.createSourceFile("exampleByTsMorph.ts", "");

  sourceFile.addStatements(sourceText);

  project.saveSync();
};

main();
