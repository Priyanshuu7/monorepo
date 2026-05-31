import { Router } from "express";
import { blogMain, createUser } from "../controllers/blog.controller";

const router = Router();

router.get("/blog", blogMain);

router.post("/users", createUser);

export default router;