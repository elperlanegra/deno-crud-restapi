import { Application, Router } from "https://deno.land/x/oak@v7.5.0/mod.ts";

const router = new Router();

const app = new Application();

router.get("/", ({ response }) => {
  response.body = "Helo world";
});

app.use(router.routes());

console.log("server running on port", 300);
await app.listen({ port: 3000 });
