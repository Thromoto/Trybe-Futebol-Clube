import * as bcrypt from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import { ILogin } from '../interfaces';
import ModelUser from '../models/Users';

export default class ServiceUsers {
  constructor(private user: ModelStatic<ModelUser>) {
    this.user = user;
  }

  public async login(user: ILogin): Promise<ILogin | null> {
    const { email, password } = user;
    const result = await this.user.findOne({ where: { email } });
    const passwordCrypt = bcrypt.compare(password, result?.password || '');
    if (!passwordCrypt) return null;
    return result;
  }
}
