import { ModelStatic } from 'sequelize';
import ModelMatches from '../models/Matches';
import Teams from '../models/Teams';

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
}
