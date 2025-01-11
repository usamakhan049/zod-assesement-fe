export interface IRequestPayload {
  body: object | null;
  path: string | null;
}

export interface IRequestException {
  returnError: boolean;
  throwException: boolean;
}
