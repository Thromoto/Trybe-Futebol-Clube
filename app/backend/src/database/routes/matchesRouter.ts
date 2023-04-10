import { Router } from 'express';
import ModelMatches from '../models/Matches';
import ControllerMatches from '../controller/matches.controller';
import ServiceMatches from '../services/matches.service';
import verifyToken from '../middlewares/authToken';
import ServiceTeams from '../services/teams.service';
import ModelTeams from '../models/Teams';

const router = Router();

const teamsService = new ServiceTeams(ModelTeams);
const matchesService = new ServiceMatches(ModelMatches);
const matchesController = new ControllerMatches(matchesService, teamsService);

router.get('/', matchesController.getAll);

router.patch('/:id/finish', verifyToken, matchesController.finishingMatch);

router.patch('/:id', verifyToken, matchesController.updateMatches);

router.post('/', verifyToken, matchesController.createMatch);

export default router;
