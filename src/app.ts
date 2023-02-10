import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import handleErrorMiddleware from './middlewares/handleError.middleware'
import userRoutes from './routes/routes'
import sessionRoutes from './routes/sessions.routes'
import contactRoutes from './routes/contact.routes'

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', sessionRoutes)
app.use('/contacts', contactRoutes)

app.use(handleErrorMiddleware)
app.listen(3000, () =>{
    console.log('Server running in port 3000')
})