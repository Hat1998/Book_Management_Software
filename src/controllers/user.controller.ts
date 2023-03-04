import { Role } from "@prisma/client";
import { prisma } from "../config/db";
import { Request, Response } from "express";

 
export const getAllUsers= async (req: Request, res: Response) => {
  try {
    let users = await prisma.user.findMany();

    res.json({ "users": users });
  } catch (err) {
    console.log(err);
  }
};
 
export const createUser = async (req: Request, res: Response) => {
  try {
    await prisma.user.create({
      data: req.body
    });
    res.json({ message: "user created" });
  } catch (error) {
    res.json({ message: error });
  }
};
 
 