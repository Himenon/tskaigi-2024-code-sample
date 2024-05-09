import { Project, ts } from "ts-morph";

const text = `const mainTask = () => {
  const subTask = () => {}
  return subTask();
}
mainTask();

`;

const project = new Project();
const sourceFile = project.createSourceFile("exampleByTsMorph.ts", "");

sourceFile.addStatements([text]);

project.saveSync();
