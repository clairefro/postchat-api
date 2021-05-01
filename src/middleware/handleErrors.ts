// learned error handling from : https://codeburst.io/better-error-handling-in-express-js-b118fc29e9c7
import { Request, Response, NextFunction } from "express";
import { GeneralError } from "../utils/errors";

export const handleErrors = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof GeneralError) {
    const code = err.getCode();
    return res.status(code).json({
      code,
      message: err.message,
    });
  }

  return res.status(500).json({
    code: 500,
    message: err.message,
  });
};
