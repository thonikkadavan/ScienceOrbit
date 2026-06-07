import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const start = Date.now();
  const { request } = context;
  const url = new URL(request.url);

  try {
    const response = await next();
    const duration = Date.now() - start;
    console.log(JSON.stringify({
      level: "info",
      method: request.method,
      path: url.pathname,
      status: response.status,
      duration,
      timestamp: new Date().toISOString(),
    }));
    return response;
  } catch (err) {
    const duration = Date.now() - start;
    console.error(JSON.stringify({
      level: "error",
      method: request.method,
      path: url.pathname,
      status: 500,
      duration,
      error: err instanceof Error ? err.message : "Unknown error",
      timestamp: new Date().toISOString(),
    }));
    throw err;
  }
});
