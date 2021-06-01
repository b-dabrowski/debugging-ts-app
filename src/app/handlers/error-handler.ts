import { NotFoundError } from "../errors/http/not-found-error";
import {Request, Response, NextFunction} from "express"
import { ApiHttpError } from "../errors/http/api-http-error";

function notFoundErrorHandler(req: Request, res: Response, next: NextFunction) {
    const err = new NotFoundError("not found");
    
    next(err);
  }
  
  function appErrorHandler(err: ApiHttpError, req: Request, res: Response) {
    res.status(err.status || 500);
    res.json({ message: err.message, error: isProduction() ? {} : err.stack });
  }
  
  function isProduction() {
    return process.env.NODE_ENV === "production";
  }
  
  export { notFoundErrorHandler, appErrorHandler };
  