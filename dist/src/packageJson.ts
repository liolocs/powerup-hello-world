export default function(variables: Record<string, string>): string {
  const { name, description } = variables;

  const pkg = {
    name,
    version: "1.0.0",
    description,
    type: "module",
    scripts: {
      dev: "npx tsx index.ts",
    },
  };

  return JSON.stringify(pkg, null, 2) + "\n";
}