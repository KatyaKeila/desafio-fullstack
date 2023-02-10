import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { Contact } from '../../entities/contacts.entity'

const listContactUserService = async(id: string): Promise<Contact[]> => {

    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            contact: true
        }
    })
    
    return user!.contact!
    
}

export default listContactUserService
