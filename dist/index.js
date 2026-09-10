// index.ts
import { defineInstructions } from "@liolocs/powerups-sdk";
var instructions = {
  name: "powerup-hello-world",
  type: "single-use",
  description: "A powerup useful for testing",
  variables: {
    required: ["name"],
    optional: ["description"]
  },
  intent: [],
  steps: [
    {
      type: "dynamic-create",
      name: "Hello World",
      template: "src/dynamic-create/index.ts",
      outputPath: "index.ts"
    },
    {
      type: "dynamic-create",
      name: "package.json",
      template: "src/dynamic-create/packageJson.ts",
      outputPath: "package.json"
    }
  ]
};
var index_default = defineInstructions(instructions, import.meta.url);
export {
  index_default as default
};
