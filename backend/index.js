import express from "express";
import { connectUsingMongoose } from "./db.js";
import authRouter from "./routes/auth.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

connectUsingMongoose();
const app = express();
app.use(cors());
const host = "https://music-player-using-mern-stack-frontend.onrender.com";
  console.log(host);


app.use(cors({ origin: host }));

const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`iNotebook app listening at http://localhost:${port}`);
});
