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

  finishingMatch = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.matches.finishingMatch(Number(id));
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  updateMatches = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;
      await this.matches.updateMatches(Number(id), homeTeamGoals, awayTeamGoals);
      return res.status(200).json({ message: 'Match updated' });
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
