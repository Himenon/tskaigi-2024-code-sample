import ts from "typescript";

export type TransformerFactory<T extends ts.Node> = ts.TransformerFactory<T>;

export const generate = (): string => {
  const source = ts.createSourceFile("sample.ts", "", ts.ScriptTarget.ESNext);
  const transformers: TransformerFactory<ts.SourceFile>[] = [];
  const result = ts.transform(source, transformers);
  result.dispose();
  const printer = ts.createPrinter();
  const transformedSourceFile = result.transformed[0];
  return printer.printFile(transformedSourceFile);
};
