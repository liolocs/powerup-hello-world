import { defineInstructions, type Instructions } from "@liolocs/powerups-sdk";

const instructions: Instructions = {
  name: "powerup-hello-world",
  type: "single-use",
  description: "A powerup useful for testing",
  variables: {
    required: [],
    optional: [],
  },
  intent: [],
  steps: [
    {
      type: "create",
      name: "Hello World",
      template: "src/index.ts",
      outputPath: "index.ts",
    },
    {
      type: "create",
      name: "package.json",
      template: "src/packageJson.ts",
      outputPath: "package.json",
    }
  ],
};

export default defineInstructions(instructions, import.meta.url);
