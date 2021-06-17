import { Bson, Router, helpers } from "../deps.ts";
import { tasks } from "../Models/tasks.ts";

const router = new Router();
router.get("/tasks", async ctx => {
  const tasks_findAll = await tasks
    .find({ _id: { $ne: null } }, { noCursorTimeout: false })
    .toArray();
  ctx.response.body = tasks_findAll;
});

export { router };
