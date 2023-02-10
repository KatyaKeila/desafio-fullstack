export interface IContactRequest {
    name: string
    email: string
    telephone: string
}

export interface IContactUpdateRequest {
    name?: string
    email?: string
    telephone?: string
}

export interface IContactResponse extends IContactRequest {
    id: string
    createdAt: Date
}