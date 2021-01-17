export enum Role {
    User = 'User',
    Admin = 'Admin',
    Teacher='Teacher',
    Student='Student'
  }
  
  export class User {
      userName: string;
      password: string;
      role: string;
      token?: string;
    }