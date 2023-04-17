import { Router } from 'express';
import ControllerLeaderboards from '../controller/leaderboards.controller';

const router = Router();

router.get('/home', ControllerLeaderboards.leaderboardsHome);
router.get('/away', ControllerLeaderboards.leaderboardsAway);
router.get('/', ControllerLeaderboards.leaderboardsAll);

export default router;
