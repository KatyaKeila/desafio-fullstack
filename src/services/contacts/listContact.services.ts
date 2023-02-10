import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contacts.entity'

const listContactService = async(): Promise<Contact[]> => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.find()

    return contacts
    
}

export default listContactService
