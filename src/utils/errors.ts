export class BaseError extends Error {
  status;
  errors;
  error;

  constructor(status: number, message: string, err?: any) {
    super();
    this.status = status;
    this.message = message;
    this.errors = Array.isArray(err) ? err : undefined;
    this.error = !Array.isArray(err) ? err : undefined;
  }
}

export class ServerError extends BaseError {
  constructor(message: string, err?: any) {
    const code = 500;
    super(code, message, err);
  }
}

export class BadRequestError extends BaseError {
  constructor(message: string, err?: any) {
    const code = 400;
    super(code, message, err);
  }
}

export class NotFoundError extends BaseError {
  constructor(message: string, err?: any) {
    const code = 404;
    super(code, message, err);
  }
}
