import { sign, SignOptions, verify } from 'jsonwebtoken';
import { ILogin } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export const createJwt = (login: ILogin) => {
  const token = sign(login, JWT_SECRET, jwtConfig);
  console.log(login);
  return token;
};

export const verifyJwt = (token: string) => verify(token, JWT_SECRET);
