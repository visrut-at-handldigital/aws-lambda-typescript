import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "aws-lambda-typescript",
  plugins: ["serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs20.x",
  },
  functions: {
    hello: {
      handler: "./src/hello.handler",
      events: [
        {
          httpApi: {
            path: "/hello",
            method: "GET",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
