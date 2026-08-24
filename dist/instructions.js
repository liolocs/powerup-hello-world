// instructions.ts
import { defineInstructions } from "@liolocs/powerups-sdk";
var instructions = {
  name: "powerup-hello-world",
  type: "single-use",
  description: "A powerup useful for testing",
  variables: {
    required: [],
    optional: []
  },
  intent: [],
  steps: [
    {
      type: "create",
      name: "Hello World",
      template: "src/index.ts",
      outputPath: "index.ts"
    },
    {
      type: "create",
      name: "package.json",
      template: "src/packageJson.ts",
      outputPath: "package.json"
    }
  ]
};
var instructions_default = defineInstructions(instructions, import.meta.url);
export {
  instructions_default as default
};
