import { Request, Response } from 'express';
import { compareSync } from 'bcryptjs';
import ServiceUsers from '../services/users.service';
import { createJwt } from '../utils/JWTfunctions';

export default class ControllerUsers {
  constructor(private user: ServiceUsers) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const data = await this.user.login({ email, password });

      if (!data || !compareSync(password, data.password) || password.length < 6) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = createJwt({ email, password });

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
