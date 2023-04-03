import { Request, Response } from 'express';
import ServiceUsers from '../services/users.service';
import createJwt from '../utils/JWTfunctions';

export default class ControllerUsers {
  constructor(private user: ServiceUsers) {}

  isBodyValid = (email: string, password: string) => email && password;

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      if (!this.isBodyValid(email, password)) {
        return res.status(400).json({ message: 'All fields must be filled' });
      }

      const token = createJwt({ email, password });

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
