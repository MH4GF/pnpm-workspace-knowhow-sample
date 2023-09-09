import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("package", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "list",
        name: "location",
        message: "What type of package should be added?",
        choices: [
          {
            name: "app",
            value: "app",
          },
          {
            name: "packages",
            value: "packages",
          },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the package?",
      },
      {
        type: "input",
        name: "directory",
        message: "Where should the package be added?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{location}}/{{directory}}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "{{location}}/{{directory}}/index.ts",
        templateFile: "templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "{{location}}/{{directory}}/tsconfig.json",
        templateFile: "templates/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "{{location}}/{{directory}}/README.md",
        templateFile: "templates/README.md.hbs",
      },
      // {
      //   type: "append",
      //   path: "index.tsx",
      //   pattern: /(?<insertion>\/\/ component exports)/g,
      //   template: 'export * from "./{{pascalCase name}}";',
      // },
    ],
  });
}
