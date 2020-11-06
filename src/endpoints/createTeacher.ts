import { Request, Response } from "express"
import { createTeacherData } from "../data/createTeacherData"


export const createTeacher = async (req: Request, res: Response) => {
    try {
      await createTeacherData(
        req.body.name,
        req.body.email,
        req.body.birthdate,
        req.body.missionId
      );
  
      res.status(200).send("New teacher");
        console.log("Teacher criado com sucesso!")
    } catch (error) {
      res.status(400).send({
        message: error.message
      });
    }
  };
 
  