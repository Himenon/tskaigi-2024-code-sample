import ts from "typescript";

export type TransformerFactory<T extends ts.Node> = ts.TransformerFactory<T>;

/**
 * Traverse処理なし
 */
export const generateWithoutTransformer = (sourceText: string): string => {
  // ==========
  // 抽象木の作成
  // ==========
  const source = ts.createSourceFile(
    "sample.ts",
    sourceText,
    ts.ScriptTarget.ESNext
  );

  // ==============
  // Transformation
  // ==============
  const transformers: TransformerFactory<ts.SourceFile>[] = [];
  const result = ts.transform(source, transformers);
  result.dispose();

  // ==============
  // Code Generate
  // ==============
  const printer = ts.createPrinter();
  const transformedSourceFile = result.transformed[0];
  return printer.printFile(transformedSourceFile);
};
