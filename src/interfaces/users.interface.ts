export interface IUserRequest {
    name: string
    email: string
    password: string
    telephone: string
    isAdm: boolean
}

export interface IUserUpdateRequest {
    name?: string
    email?: string
    password?: string
    telephone?: string
}

export interface IUserResponse extends IUserRequest {
    id: string
    createdAt: Date
}