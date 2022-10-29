export interface ITag {
  value: string;
  count: number;
}

export interface IRegistrationResponse {
  accessToken: string;
  refreshToken: string;
  user: IUserRegistrationData;
}

export interface IUserRegistrationData {
  id: string;
  role: 'user' | 'admin';
  status: 'active' | 'block';
}

export interface IRegistrationData {
  name?: string;
  email: string;
  password: string;
}

export interface IOption {
  title: string;
  value: string | number | boolean;
}

export interface IItem {
  title: string;
  description: string;
  likes: string[];
  tags: string[];
  options: IOption[];
}

export interface IItemOption {
  title: string;
  dataType: string;
}

export interface ICollection {
  title: string;
  description: string;
  image: string;
  items: IItem[];
  itemOptions: IItemOption[];
  topic: string[];
}

export interface IUserResponse {
  _id: string;
  name: string;
  email: string;
  password: string;
  status: 'active' | 'block';
  role: 'user' | 'admin';
  collections: ICollection[];
}

export interface IUsersResponse {
  userId: string;
  name: string;
  email: string;
  password: string;
  status: 'active' | 'block';
  role: 'user' | 'admin';
  collections: ICollection[];
}

export interface IChangeStatus {
  users: string[];
  status: 'active' | 'block';
}

export interface IChangeRole {
  users: string[];
  role: 'admin' | 'user';
}
