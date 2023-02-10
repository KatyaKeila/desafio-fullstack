import { Router } from 'express'
import { contactCreateController,contactListController,contactListUserController, deleteContactController, updateContactController } from '../controllers/contacts.controllers'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware'

    const contactRoutes = Router()

    contactRoutes.post('', ensureAuthMiddleware, contactCreateController)
    contactRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, contactListController)
    contactRoutes.get('/user', ensureAuthMiddleware, contactListUserController)
    contactRoutes.delete('/user/:id', ensureAuthMiddleware, deleteContactController)
    contactRoutes.patch('/user/:id', ensureAuthMiddleware, updateContactController)

    export default contactRoutes