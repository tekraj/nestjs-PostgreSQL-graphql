
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src",
  generates: {
    "graphql/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers", "typescript-document-nodes"]
    },
    "graphql/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
