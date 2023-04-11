import { Request, Response } from 'express';
import ServiceTeams from '../services/teams.service';

export default class ControllerTeams {
  constructor(private team: ServiceTeams) {
    this.team = team;
  }

  getAll = async (_req: Request, res: Response) => {
    const team = await this.team.getAll();
    return res.status(200).json(team);
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const team = await this.team.getById(id);
    return res.status(200).json(team);
  };
}
