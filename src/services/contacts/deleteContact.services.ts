import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contacts.entity'
import { AppError } from '../../errors/appError'
    
    
const deleteContactService = async (id: string): Promise<void> => {
    
    const contactRepository = AppDataSource.getRepository(Contact)
    const findContact = await contactRepository.findOneBy({
        id
    })
        
    if(!findContact){
        throw new AppError('Contact not found', 404 )
    }

    await contactRepository.remove(findContact)
        
}
    
export default deleteContactService