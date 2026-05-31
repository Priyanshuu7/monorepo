import { Router } from "express";
import { blogMain } from "../controllers/blog.controller";

const router = Router();

router.get("/blog", blogMain);

export default router;