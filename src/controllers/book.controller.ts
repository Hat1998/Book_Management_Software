 import { prisma } from "../config/db";
import { Request, Response } from "express";

 
export const getAllBooks= async (req: Request, res: Response) => {
  try {
    let books = await prisma.user.findMany();

    res.json({ "boOks": books });
  } catch (err) {
    console.log(err);
  }
};
 
export const createBook = async (req: Request, res: Response) => {
  try {
    await prisma.book.create({
      data: req.body
    });
    res.json({ message: "book created" });
  } catch (error) {
    res.json({ message: error });
  }
};
 
 