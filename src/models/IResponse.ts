export interface IResponse<T> {
  data: T | null;
  status: number;
}
