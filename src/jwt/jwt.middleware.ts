import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers);
  next();
}
