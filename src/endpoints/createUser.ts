import { Request, Response } from "express"
import {createTodoListUser} from "../data/data"



export const create = async (req: Request, res: Response) => {
   try {
     await createTodoListUser(
       req.body.name,
       req.body.nickname,
       req.body.email
     );
 
     res.status(200).send("New user");
       console.log("Usuário criado com sucesso!")
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 };

 