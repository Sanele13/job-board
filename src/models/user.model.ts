export class AuthData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  token?: string;
}

export class User {
  name: string;
  lastName: string;
  email: string;
  contactNumber?: string;
  avatar: string;
}
