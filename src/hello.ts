import type {
  Context,
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from "aws-lambda";

export const handler: Handler = async (
  _event: APIGatewayProxyEventV2,
  _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {
  console.log(process.env.CUSTOM_VAR);
  console.log("Hello");

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello",
    }),
  };
};
