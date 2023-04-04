import { Request, Response, NextFunction } from 'express';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const validationRegex = /\S+@\S+\.\S/;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!validationRegex.test(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default validateUser;
