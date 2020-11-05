import {connection} from "../index"


export const createStudentData = async (
    name: string,
    email: string,
    birthdate: string,
    missionId: number
  ): Promise<void> => {
    await connection.raw(`INSERT INTO Student (name, email, birthdate, missionId) 
    VALUES (
      "${name}",
        "${email}",
        "${birthdate}",
        "${missionId}"`)
      
  };