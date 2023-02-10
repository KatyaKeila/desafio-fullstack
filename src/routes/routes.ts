import { Router } from 'express'
import { deleteUserController, listUsersController, updateUserController, userCreateController } from '../controllers/user.controlers'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware'

const userRoutes = Router()

userRoutes.post('', userCreateController)
userRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController)
userRoutes.patch('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, updateUserController)
userRoutes.delete('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, deleteUserController)


export default userRoutes