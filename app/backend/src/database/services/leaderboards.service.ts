import { IStatistics } from '../interfaces';
import sequelize from '../models';
import { allLeaderboards, awayLeaderboards, homeLeaderboards } from '../queries/Leaderboards';

export default class ServiceLeaderboards {
  static async leaderboardsHome(): Promise<IStatistics[]> {
    const [leaderboard] = await sequelize.query(homeLeaderboards);
    return leaderboard as IStatistics[];
  }

  static async leaderboardsAway(): Promise<IStatistics[]> {
    const [leaderboard] = await sequelize.query(awayLeaderboards);
    return leaderboard as IStatistics[];
  }

  static async leaderboardsAll(): Promise<IStatistics[]> {
    const [leaderboard] = await sequelize.query(allLeaderboards);
    return leaderboard as IStatistics[];
  }
}
