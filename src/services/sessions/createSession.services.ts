import { DataSource } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { ISessionRequest } from '../../interfaces/session.interface'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AppError } from '../../errors/appError'
import 'dotenv/config'

const createSessionService = async ({email, password}: ISessionRequest): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: email
    })

    if(!user){
        throw new AppError('Invalid user or password', 401)
    }

    const passwordMatch = await compare(password, user.password) 

    if(!passwordMatch){
        throw new AppError('Invalid user or password', 401)
    }

    const token = jwt.sign({
            isAdm: user.isAdm
        }, 
        process.env.SECRET_KEY as string,
        {
            expiresIn: "1d",
            subject: user.id
        }
    )

    return token
}

export default createSessionService