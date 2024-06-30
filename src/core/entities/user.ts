export class User {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
  role: Role;
  phone_number: string;
  created_at: Date;
  constructor(
    first_name: string,
    last_name: string,
    username: string,
    password: string,
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.password = password;
    this.email = '';
    this.phone_number = '';
    this.role = Role.User;
    this.created_at = new Date();
  }

  get name() {
    return `${this.first_name} ${this.last_name}`;
  }

  setRole(role: Role) {
    this.role = role;
  }
}

export enum Role {
  Admin = 'admin',
  User = 'user',
  Teacher = 'teacher',
}
