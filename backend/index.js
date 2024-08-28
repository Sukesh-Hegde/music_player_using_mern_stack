import express from "express";
import { connectUsingMongoose } from "./db.js";
import authRouter from "./routes/auth.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

connectUsingMongoose();
const app = express();
const allowedOrigins = [
  "https://music-player-using-mern-stack-frontend.onrender.com",
  "https://music-player-using-mern-stackfrontend-ib9be0xc8.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`iNotebook app listening at http://localhost:${port}`);
});
