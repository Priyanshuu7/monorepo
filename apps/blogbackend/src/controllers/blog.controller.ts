import { Request, Response } from "express";
import { prisma } from "@myapp/database";

export const blogMain = (req: Request, res: Response) => {
  res.send("This is your blog");
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
};