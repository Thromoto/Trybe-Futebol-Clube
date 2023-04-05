import { Request, Response } from 'express';
import ServiceMatches from '../services/matches.service';

export default class ControllerMatches {
  constructor(private matches: ServiceMatches) {
    this.matches = matches;
  }

  getAll = async (_req: Request, res: Response) => {
    try {
      const matches = await this.matches.getAll();
      return res.status(200).json(matches);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
