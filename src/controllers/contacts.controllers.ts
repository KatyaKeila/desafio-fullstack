import { Request, Response } from 'express'
import { IContactRequest, IContactUpdateRequest } from '../interfaces/contacts.interface'
import createContactService from '../services/contacts/createContacts.services'
import deleteContactService from '../services/contacts/deleteContact.services'
import listContactService from '../services/contacts/listContact.services'
import listContactUserService from '../services/contacts/listContactUser.services'
import updateContactService from '../services/contacts/updateContact.services'

const contactCreateController = async(req: Request, res: Response) => {

    const {name, email, telephone}: IContactRequest = req.body
    const id = req.user.id
    const contactCreate =  await createContactService(name, email, telephone, id)
    return res.status(201).json(contactCreate)

}

const contactListController = async(req: Request, res: Response) => {

    const contacts = await listContactService()
    return res.json(contacts)
}

const contactListUserController = async(req: Request, res: Response) => {

    const id = req.user.id
    const contacts = await listContactUserService(id)
    return res.json(contacts)
}

const deleteContactController = async(req: Request, res: Response) => {
    const { id } = req.params;
  
    const contactDeleted = await deleteContactService(id);
    return res.status(204).json({
      message: "Contact deleted",
    });
    
}

const updateContactController = async (req: Request, res: Response) => {
      const contact: IContactUpdateRequest = req.body;
      const { id } = req.params;
  
      const updatedContact = await updateContactService(id, contact);
  
      return res.status(200).json(updatedContact);

}

export { contactCreateController, contactListController, contactListUserController, deleteContactController, updateContactController}