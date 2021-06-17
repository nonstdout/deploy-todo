import { MongoClient } from "../deps.ts";
const client = new MongoClient();

await client.connect({
  tls: true,
  db: "",
  servers: [
    {
      host: "https://mongo.com",
      port: 27017
    }
  ],
  credential: {
    username: "dbUser",
    password: "password",
    db: "tasks",
    mechanism: "SCRAM-SHA-1"
  }
});

export { client };
