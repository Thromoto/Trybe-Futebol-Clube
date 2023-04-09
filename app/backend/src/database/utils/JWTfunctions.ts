import { sign, SignOptions, verify } from 'jsonwebtoken';
import { IUsers } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export const createJwt = (login: Omit<IUsers, 'username'>) => {
  const token = sign(login, JWT_SECRET, jwtConfig);
  return token;
};

export const verifyJwt = (token: string) => verify(token, JWT_SECRET);
