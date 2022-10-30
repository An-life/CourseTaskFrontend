import { IAddAdditionalOptions } from '../AddCollection/types';

export interface IAdditionalOptions {
  optionsFields: IAddAdditionalOptions[] | [];
  setOptionsFields: React.Dispatch<React.SetStateAction<IAddAdditionalOptions[] | []>>;
}
