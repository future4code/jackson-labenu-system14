import express, { Express, Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { create } from "../src/endpoints/createUser"
import { getTodoListUserById, editTodoListUser, createTodoListTask } from "./data/data"
import knex from 'knex'
import dotenv from "dotenv"



dotenv.config()



export const connection = knex({	// Estabelece conexão com o banco
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();

app.use(express.json());
app.use(cors())

app.put("/user", create)

app.get("/user/:id", async (req: Request, res: Response) => {
   try {
       const user = await getTodoListUserById(req.params.id as any);

       res.status(200).send({user});
   } catch (err) {
       res.status(400).send({
       message: err.message,
       });
   }
});

app.post("/user/edit/:id", async (req: Request, res: Response) => {
   try {
     await editTodoListUser(req.params.id as any, req.body.name, req.body.nickname);
     res.status(200).send({
       message: "Success",
     });
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });

 app.put("/task", async (req: Request, res: Response) => {
   try {
     await createTodoListTask(
       req.body.title,
       req.body.description,
       req.body.limit_date,
       req.body.creator_user_id
     );
 
     res.status(200).send();
       console.log("New task!")
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });




const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

