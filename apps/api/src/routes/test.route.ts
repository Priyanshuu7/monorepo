import { Router } from "express";
import {
  testMain,
  createUser,
  getUsers,
} from "../controllers/test.controller";

const router = Router();

router.get("/main", testMain);

router.post("/users", createUser);

router.get("/users", getUsers);

export default router;