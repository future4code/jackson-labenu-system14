import express, { Express, Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from 'knex';
import dotenv from "dotenv";
import { createStudent } from "../src/endpoints/createStudent"
import { createMission} from "../src/endpoints/createMission"
import { createTeacher } from "../src/endpoints/createTeacher"
import { getStudentById } from "./endpoints/getStudentById";




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

app.post("/student", createStudent)

app.get("/student/:id", getStudentById)


app.post("/teacher", createTeacher)


app.post("/mission", createMission)
 
    


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

