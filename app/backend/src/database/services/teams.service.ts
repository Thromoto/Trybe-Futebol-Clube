import { ModelStatic } from 'sequelize';
import { ITeams } from '../interfaces';
import ModelTeams from '../models/Teams';

export default class ServiceTeams {
  constructor(private team: ModelStatic<ModelTeams>) {
    this.team = team;
  }

  public async getAll(): Promise<ModelTeams[]> {
    const teams = await this.team.findAll();
    return teams;
  }

  public async getById(id: string): Promise<ITeams | null> {
    const teamId = await this.team.findByPk(id);
    if (!teamId) throw new Error('Team not found');
    return teamId;
  }
}
