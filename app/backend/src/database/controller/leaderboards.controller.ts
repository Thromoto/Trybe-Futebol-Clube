import { Request, Response } from 'express';
import ServiceLeaderboards from '../services/leaderboards.service';

export default class ControllerLeaderboards {
  static async leaderboardsHome(req: Request, res: Response) {
    const leaderboard = await ServiceLeaderboards.leaderboardsHome();
    return res.status(200).json(leaderboard);
  }

  static async leaderboardsAway(req: Request, res: Response) {
    const leaderboard = await ServiceLeaderboards.leaderboardsAway();
    return res.status(200).json(leaderboard);
  }

  static async leaderboardsAll(req: Request, res: Response) {
    const leaderboard = await ServiceLeaderboards.leaderboardsAll();
    return res.status(200).json(leaderboard);
  }
}
