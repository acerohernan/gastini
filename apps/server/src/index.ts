import cors from "cors";
import express from "express";
import { env } from "./config/env";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.disable("x-powered-by");

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
