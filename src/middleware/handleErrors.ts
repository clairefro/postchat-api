import { Request, Response, NextFunction } from "express";

export const handleErrors = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(err);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message,
    errors: err.errors,
  });
};
