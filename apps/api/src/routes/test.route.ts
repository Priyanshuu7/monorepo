import { Router } from "express";
import { testMain } from "../controllers/test.controller";

const router = Router();

router.get("/main", testMain);

export default router;