import ts from "typescript";
import * as fs from "node:fs";

import * as Printer from "./utils";

const factory = ts.factory;

export const run = () => {
  const code = Printer.generateCodeByStatements([
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
              factory.createBlock([factory.createReturnStatement(factory.createStringLiteral("world"))], true),
            ),
          ),
        ],
        ts.NodeFlags.Const,
      ),
    ),
  ]);

  fs.writeFileSync("output/sample2.ts", code, "utf8");

  console.log("Generated output/sample2.ts");
};
