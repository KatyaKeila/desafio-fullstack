import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserRequest } from '../../interfaces/users.interface'
import { hash } from 'bcrypt'
import { AppError } from '../../errors/appError'

const userCreateService = async ({name, email, telephone, isAdm, password}: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    if(!password){
        throw new AppError('Password is missing')
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        telephone,
        isAdm,
        password: hashedPassword
    })
    
    await userRepository.save(user)

    return user

}

export default userCreateService