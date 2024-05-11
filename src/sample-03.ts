import { Project, ts } from "ts-morph";

export const run = () => {
  const text = `const mainTask = () => {
    const subTask = () => {}
    return subTask();
  }
  mainTask();
  
  `;

  const project = new Project();
  const sourceFile = project.createSourceFile("output/sample-03.ts", "", {
    overwrite: true,
  });

  sourceFile.addStatements([text]);

  project.saveSync();

  console.log("Generated output/sample-03.ts");
};
