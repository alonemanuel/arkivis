import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: string | number = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world from the backend!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
