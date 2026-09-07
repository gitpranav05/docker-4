import {prisma} from "@repo/db/client";
import { type Request, type Response} from "express";
import express = require("express");


const app= express();

app.use(express.json());


app.get("/users", async (req:Request, res: Response) => {
    try{

        const users = await prisma.user.findMany();
        res.json({users: users});
    }catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

app.post("/user", async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;
        const newUser = await prisma.user.create({
            data:{
                username,
                password
            }
        })
        res.json({message: "User created successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.listen(3001, () => {
  console.log("Server is running on port 3001");
});