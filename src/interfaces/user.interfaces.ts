export interface iUserRequest {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface iUser extends iUserRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
}
