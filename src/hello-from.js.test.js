import test from "node:test";
import assert from "node:assert";

const { handler: helloLambda } = require("./hello-from.js");

test("it should return message as 'Hello from JS!'", async () => {
  const testEvent = {};
  const testContext = {};
  const testCallback = {};

  const response = await helloLambda(testEvent, testContext, testCallback);
  assert.strictEqual(response.statusCode, 200);
  const body = JSON.parse(response.body);
  assert.strictEqual(body.message, "Hello from JS!");
});
