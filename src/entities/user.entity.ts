import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer'
import { Contact } from './contacts.entity'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60, unique: true })
    email: string

    @Column({ length: 120 })
    @Exclude()
    password: string

    @Column({ length: 11 })
    telephone: string

    @Column()
    isAdm: boolean

    @CreateDateColumn({type: 'date'})
    createdAt: Date

    @OneToMany(() => Contact, contact => contact.user, { eager: true})
    contact: Contact[]
}

export { User }
