import { Bson, Router, helpers } from "../deps.ts";
import { client } from "./DBConnection.ts";

interface tasks {
  id: string;
}

const db = await client.database("tasks");

const tasks = await db.collection<tasks>("tasks")

export { tasks };