import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity('contact')
class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60, unique: true })
    email: string

    @Column({ length: 11 })
    telephone: string

    @CreateDateColumn({type: 'date'})
    createdAt: Date

    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    user: User
}

export { Contact }