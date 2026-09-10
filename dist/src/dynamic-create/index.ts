export default function (variables: Record<string, string>): string {
  return `console.log('Hello ${variables.name}!');`;
}