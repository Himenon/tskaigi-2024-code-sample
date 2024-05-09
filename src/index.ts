import ts from "typescript";
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
  const code = Printer.generateWithoutTransformer(sourceText);
  fs.writeFileSync("output/sample1.ts", code, "utf8");

  const code2 = Printer.generate([
    factory.createVariableStatement(
      undefined,
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            factory.createIdentifier("hello"),
            undefined,
            undefined,
            factory.createArrowFunction(
              undefined,
              undefined,
              [],
              undefined,
              factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
              factory.createBlock(
                [
                  factory.createReturnStatement(
                    factory.createStringLiteral("world")
                  ),
                ],
                true
              )
            )
          ),
        ],
        ts.NodeFlags.Const
      )
    ),
  ]);
  fs.writeFileSync("output/sample2.ts", code2, "utf8");
};

main();
