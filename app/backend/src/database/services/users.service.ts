import { ModelStatic } from 'sequelize';
import { IUsers } from '../interfaces';
import ModelUser from '../models/Users';

export default class ServiceUsers {
  constructor(private user: ModelStatic<ModelUser>) {
    this.user = user;
  }

  public async login(user: Omit<IUsers, 'role' | 'username'>): Promise<IUsers | null> {
    const { email } = user;
    const result = await this.user.findOne({ where: { email } });
    return result;
  }
}
