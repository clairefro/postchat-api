export class BaseError extends Error {
  statusCode;
  errors;
  error;

  constructor(statusCode: number, message: string, err?: any | any[]) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.errors = Array.isArray(err) ? err : undefined;
    this.error = !Array.isArray(err) ? err : undefined;
  }
}

export class ServerError extends BaseError {
  constructor(message: string) {
    const code = 500;
    super(code, message);
  }
}

export class BadRequestError extends BaseError {
  constructor(message: string) {
    const code = 400;
    super(code, message);
  }
}

export class NotFoundError extends BaseError {
  constructor(message: string) {
    const code = 404;
    super(code, message);
  }
}
