// learned this handy error util from: https://codeburst.io/better-error-handling-in-express-js-b118fc29e9c7

export class GeneralError extends Error {
  errors: any[];

  constructor(message: string, errors?: any[]) {
    super();
    this.message = message;
    this.errors = errors || [];
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 400;
    }
    if (this instanceof NotFound) {
      return 404;
    }
    return 500;
  }
}

export class BadRequest extends GeneralError {}
export class NotFound extends GeneralError {}
