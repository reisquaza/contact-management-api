import { Request, Response } from "express";
import readUsersService from "../../services/users/readUsers.service";
import {instanceToPlain} from 'class-transformer'

const readUsersController = async (req: Request, res: Response) => { 
    const users = await readUsersService()

    return res.status(200).json(instanceToPlain(users))
}

export default readUsersController