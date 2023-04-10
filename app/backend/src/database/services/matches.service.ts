import { ModelStatic } from 'sequelize';
import ModelMatches from '../models/Matches';
import Teams from '../models/Teams';
import { IMatches, Matches } from '../interfaces';

export default class ServiceMatches {
  constructor(private matches: ModelStatic<ModelMatches>) {
    this.matches = matches;
  }

  public async getAll(): Promise<ModelMatches[]> {
    const matches = await this.matches.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  public async finishingMatch(id: number) {
    const matchId = await this.matches.update({ inProgress: false }, { where: { id } });
    return matchId;
  }

  public async updateMatches(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const matchId = await this.matches
      .update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return matchId;
  }

  public async createMatch({ homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals }: IMatches): Promise<Matches> {
    const newMatch = await this.matches
      .create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true });
    return newMatch;
  }
}
