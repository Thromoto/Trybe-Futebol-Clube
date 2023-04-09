import { Request, Response } from 'express';
import ServiceMatches from '../services/matches.service';

export default class ControllerMatches {
  constructor(private matches: ServiceMatches) {
    this.matches = matches;
  }

  getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    try {
      let matches = await this.matches.getAll();
      if (inProgress === 'true') {
        matches = matches.filter((match) => match.inProgress);
      } else if (inProgress === 'false') {
        matches = matches.filter((match) => !match.inProgress);
      }
      return res.status(200).json(matches);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
