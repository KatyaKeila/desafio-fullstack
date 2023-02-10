import { Request, Response } from 'express'
import { IUserRequest, IUserUpdateRequest } from '../interfaces/users.interface'
import listUsersService from '../services/users/listUsers.services'
import updateUserService from '../services/users/updateUser.services'
import userCreateService from '../services/users/createUser.services'
import { instanceToPlain } from 'class-transformer'
import deleteUserService from '../services/users/deleteUser.services'


const userCreateController = async(req: Request, res: Response) => {

    const user: IUserRequest = req.body
    const userCreate = await userCreateService(user)
    return res.json(instanceToPlain(userCreate))

}

const listUsersController = async(req: Request, res: Response) => {
    const users = await listUsersService()
    return res.json(instanceToPlain(users))
}


const updateUserController = async(req: Request, res: Response) => {
    
    const user: IUserUpdateRequest = req.body
    const id: string = req.params.id
    const updateUSer = await updateUserService(user, id)
    return res.json(updateUSer)
     
}

const deleteUserController = async(req: Request, res: Response) => {

    const id = req.params.id
    await deleteUserService(id)
    return res.status(204).json({ message: "User deleted with sucess!" })

}

export { userCreateController, listUsersController, updateUserController, deleteUserController }