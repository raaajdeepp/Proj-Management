import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express(); //Express ko bulao

// basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-type"],
  }),
);

// import the routes
import heathCheckRouter from "./routes/heathcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

// Home route : "/api/v1/heathcheck"
app.use("/api/v1/heathcheck", heathCheckRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

export default app;