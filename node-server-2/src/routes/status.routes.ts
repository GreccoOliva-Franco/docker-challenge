// External modules
import { Router } from 'express';

// Controllers
import statusController from '../controllers/status.controller';

const routes = Router();

routes.get('/', statusController.getCurrentStatus);

export default routes;