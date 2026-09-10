import { defineInstructions, type Instructions } from "@liolocs/powerups-sdk";

const instructions: Instructions = {
  name: "powerup-hello-world",
  type: "single-use",
  description: "A powerup useful for testing",
  variables: {
    required: ["name"],
    optional: ["description"],
  },
  intent: [],
  steps: [
    {
      type: "dynamic-create",
      name: "Hello World",
      template: "src/dynamic-create/index.ts",
      outputPath: "index.ts",
    },
    {
      type: "dynamic-create",
      name: "package.json",
      template: "src/dynamic-create/packageJson.ts",
      outputPath: "package.json",
    }
  ],
};

export default defineInstructions(instructions, import.meta.url);
