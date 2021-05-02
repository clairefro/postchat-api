import { Request, Response, NextFunction } from "express";

export const handleErrors = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // format error
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors || [],
  });
};
