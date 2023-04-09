import { Router } from 'express';
import ModelMatches from '../models/Matches';
import ControllerMatches from '../controller/matches.controller';
import ServiceMatches from '../services/matches.service';
import verifyToken from '../middlewares/authToken';

const router = Router();

const matchesService = new ServiceMatches(ModelMatches);
const matchesController = new ControllerMatches(matchesService);

router.get('/', matchesController.getAll);

router.patch('/:id/finish', verifyToken, matchesController.finishingMatch);

export default router;
