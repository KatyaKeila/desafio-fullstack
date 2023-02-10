import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contacts.entity'
import { User } from '../../entities/user.entity'

const createContactService = async(name: string, email: string, telephone: string, id: string): Promise<Contact> => {

    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOneBy({
        id
    })

    const contact = contactRepository.create({
        name,
        email,
        telephone,
        user: user!
    })

    await contactRepository.save(contact)

    return contact
}

export default createContactService