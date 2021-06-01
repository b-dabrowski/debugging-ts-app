import { ApiHttpError } from "./api-http-error";

export class NotFoundError extends ApiHttpError {
  constructor(message: string, stack?: string, errorKey?: string) {
    super(message, stack, errorKey);
    this.status = 404;
  }
}
