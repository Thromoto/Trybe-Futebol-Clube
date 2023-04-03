import { sign, SignOptions } from 'jsonwebtoken';
import { ILogin } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createJwt = (login: ILogin) => {
  const token = sign(login, JWT_SECRET, jwtConfig);
  return token;
};

export default createJwt;
