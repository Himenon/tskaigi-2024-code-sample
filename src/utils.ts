import ts from "typescript";

export type TransformerFactory<T extends ts.Node> = ts.TransformerFactory<T>;

/**
 * Traverse処理なし
 */
export const generateCodeByPlainText = (sourceText: string): string => {
  // ==========
  // 抽象木の作成
  // ==========
  const source = ts.createSourceFile("sample.ts", sourceText, ts.ScriptTarget.ESNext);
  // ==============
  // Transformation
  // ==============
  const result = ts.transform(source, []);
  result.dispose();

  // ==============
  // Code Generate
  // ==============
  const printer = ts.createPrinter();
  const transformedSourceFile = result.transformed[0];
  return printer.printFile(transformedSourceFile);
};

export const generateCodeByStatements = (statements: ts.Statement[]) => {
  const sourceFileNode = ts.createSourceFile(
    "",
    "", // empty text
    ts.ScriptTarget.ESNext,
  );

  const transformedSourceFile = ts.factory.updateSourceFile(
    sourceFileNode,
    statements,
    sourceFileNode.isDeclarationFile,
    sourceFileNode.referencedFiles,
    sourceFileNode.typeReferenceDirectives,
    sourceFileNode.hasNoDefaultLib,
    sourceFileNode.libReferenceDirectives,
  );

  const printer = ts.createPrinter();
  return printer.printFile(transformedSourceFile);
};
