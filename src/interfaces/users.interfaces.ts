export interface iUsersRequest {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export interface iUser extends iUsersRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface iUserLogin {
  email: string;
  password: string;
}
