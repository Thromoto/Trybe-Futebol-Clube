import { Router } from 'express';
import ModelTeams from '../models/Teams';
import ServiceTeams from '../services/teams.service';
import ControllerTeams from '../controller/teams.controller';

const router = Router();

const teamService = new ServiceTeams(ModelTeams);
const teamController = new ControllerTeams(teamService);

router.get('/', teamController.getAll);

export default router;
