import { Request, Response } from "express";

export const testMain = (req: Request, res: Response) => {
  res.send("Hello World from priyanshu's API!");
};