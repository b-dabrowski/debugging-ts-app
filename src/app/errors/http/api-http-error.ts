export interface HttpError {
  message: string;
  errorKey?: string;
  status?: number;
}

export abstract class ApiHttpError extends Error implements HttpError {
  public message: string;

  public errorKey?: string;

  protected _status?: number;

  protected constructor(message: string, stack?: string, errorKey?: string) {
    super();
    this.message = message;

    if (stack) {
      this.stack = stack;
    }

    if (errorKey) {
      this.errorKey = errorKey;
    }
  }

  get status() {
    return this._status;
  }

  set status(value: number | undefined) {
      this._status = value;
  }
}
