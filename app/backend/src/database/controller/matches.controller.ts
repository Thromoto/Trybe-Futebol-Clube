import { Request, Response } from 'express';
import ServiceMatches from '../services/matches.service';
import ServiceTeams from '../services/teams.service';

export default class ControllerMatches {
  constructor(private matches: ServiceMatches, private teams: ServiceTeams) {
    this.matches = matches;
    this.teams = teams;
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

  createMatch = async (req: Request, res: Response) => {
    try {
      const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;

      if (homeTeamId === awayTeamId) {
        return res.status(422)
          .json({ message: 'It is not possible to create a match with two equal teams' });
      }

      const homeTeam = await this.teams.getById(homeTeamId);
      console.log(homeTeam);
      const awayTeam = await this.teams.getById(awayTeamId);
      if (!homeTeam || !awayTeam) {
        return res.status(404).json({ message: 'There is no team with such id!' });
      }

      const newMatch = await this.matches
        .createMatch({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true });
      return res.status(201).json(newMatch);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
