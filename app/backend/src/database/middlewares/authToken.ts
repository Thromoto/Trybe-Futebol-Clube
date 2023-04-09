import { Request, Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/JWTfunctions';

export default function verifyToken(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const decoded = verifyJwt(authorization);
    req.body.data = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}
