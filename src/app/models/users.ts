export enum Role {
    User = 'User',
    Admin = 'Admin'
  }
  
  export interface User {
      userName: string;
      password: string;
      role: Role;
      token?: string;
    }