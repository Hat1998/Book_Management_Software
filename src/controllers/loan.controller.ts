 import { prisma } from "../config/db";
import { Request, Response } from "express";

 
export const getAllLoans= async (req: Request, res: Response) => {
  try {
    let loans = await prisma.loan.findMany();

    res.json({ "loans": loans });
  } catch (err) {
    console.log(err);
  }
};
 
export const createLoan = async (req: Request, res: Response) => {
  try {
    await prisma.loan.create({
      data: req.body
    });
    res.json({ message: "loan created" });
  } catch (error) {
    res.json({ message: error });
  }
};
 
 