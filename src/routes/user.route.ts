import { Router } from "express";
import {
  getAllUsers,
  createUser
 
} from "../controllers/user.controller";
let router = Router();
import validate from "../middleware/validate";
import { addUser } from "../zod.schema/zod.user";

//1
router.get("/", getAllUsers);

//2
router.post("/", validate(addUser), createUser);

 export default router;