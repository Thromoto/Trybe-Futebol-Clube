import { ModelStatic } from 'sequelize';
import ModelTeams from '../models/Teams';

export default class ServiceTeams {
  constructor(private team: ModelStatic<ModelTeams>) {
    this.team = team;
  }

  public async getAll(): Promise<ModelTeams[]> {
    const teams = await this.team.findAll();
    return teams;
  }
}
