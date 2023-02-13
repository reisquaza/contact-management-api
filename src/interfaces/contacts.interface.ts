export interface iContactRequest {
  email: string;
  userId: string;
}

export interface iContact {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
}

export interface iContactUpdate {
  name?: string;
  email?: string;
  phoneNumber?: string;
}
