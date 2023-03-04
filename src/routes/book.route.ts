import { Router } from "express";
import {
  getAllBooks,
  createBook
 
} from "../controllers/book.controller";
let router = Router();
import validate from "../middleware/validate";
import { addBook } from "../zod.schema/zod.book";

//1
router.get("/", getAllBooks);

//2
router.post("/", validate(addBook), createBook);

 export default router