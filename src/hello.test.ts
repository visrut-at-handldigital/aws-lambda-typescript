import test from "node:test";
import assert from "node:assert";
import { handler as helloLambda } from "./hello";

import type { APIGatewayProxyEventV2, Callback, Context } from "aws-lambda";

test("it should return message as 'Hello'", async () => {
  const testEvent = {} as APIGatewayProxyEventV2;
  const testContext = {} as Context;
  const testCallback = {} as Callback;

  const response = await helloLambda(testEvent, testContext, testCallback);
  assert.strictEqual(response.statusCode, 200);
  const body = JSON.parse(response.body);
  assert.strictEqual(body.message, "Hello");
});
