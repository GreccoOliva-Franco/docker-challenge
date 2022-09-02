// External modules
import { Router } from 'express';

// Routes
import statusRoutes from './status.routes';

// Handlers
import { noEndpointHandler } from '../handlers/no-endpoint.handler';

const routes = Router();

routes.use('/status', statusRoutes);

export default routes;