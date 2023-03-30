import { Request, Response } from 'express';
import ServiceTeams from '../services/teams.service';

export default class ControllerTeams {
  constructor(private team: ServiceTeams) {
    this.team = team;
  }

  getAll = async (_req: Request, res: Response) => {
    try {
      const team = await this.team.getAll();
      return res.status(200).json(team);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
