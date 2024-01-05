export interface sendEmailType {
  items: {};
  isLoading: boolean;
  iserror: Error | null;
  onSuccess?: (data?: any) => void;
  onError?: (data?: any) => void;
}
export interface FormDataType {
  name: string;
  email: string;
  project: string;
  message: string;
  onSuccess?: (data?: any) => void;
  onError?: (data?: any) => void;
}
