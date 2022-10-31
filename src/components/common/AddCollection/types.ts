export interface IAddCollectionInputs {
  title: string;
  topic: string[];
}

export interface IAddAdditionalOptions {
  type: string;
  title: string;
}

export interface IInitialData {
  initialTitle: string;
  initialDescription: string;
  formType: 'add' | 'change';
}
