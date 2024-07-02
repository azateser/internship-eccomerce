export enum Role {
    customer = "customer",
    admin = "admin",
}

export interface User {
  id: string;
  name: string;
  role: Role;
  email: string;
  password: string;
  avatar: string;
}