export interface ButtonOptions {
  id: number;
  title: JSX.Element;
  value: string;
  icon: JSX.Element;
  onClick: (value: string) => void;
}

export interface IUsersData {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'block';
  role: 'user' | 'admin';
}
