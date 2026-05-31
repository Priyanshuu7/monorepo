import { Request, Response } from "express";

export const blogMain = (req: Request, res: Response) => {
  res.send("This is your blog");
};