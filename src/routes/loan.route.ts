import { Router } from "express";
import {
    getAllLoans,
    createLoan
 
} from "../controllers/loan.controller";
let router = Router();
  

router.get("/", getAllLoans);


router.post("/", createLoan);

 export default router;