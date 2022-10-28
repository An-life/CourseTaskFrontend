export interface IRegistrationInputs {
  name?: string;
  email: string;
  password: string;
}

export interface IRegistration {
  closeDrawerMenu: () => void;
  setIsAuth: () => void;
}
