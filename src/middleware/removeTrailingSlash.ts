import { Request, Response, NextFunction } from "express";

export const removeTrailingSlash = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path.substr(-1) == "/" && req.path.length > 1) {
    let query = req.url.slice(req.path.length);
    res.redirect(301, req.path.slice(0, -1) + query);
  } else {
    next();
  }
};
