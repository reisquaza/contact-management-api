export interface iUsersRequest {
    name: string;
    email: string;
    password: string;
    telephone: string;
}

export interface iUser {
    id: string;
    name: string;
    email: string;
    telephone: string;
    password: string;
    created_at: string;
}