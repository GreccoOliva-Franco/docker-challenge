// External modules
import express from 'express';

// Routes
import appRoutes from './routes/app.routes';

// Configurations
import appConfig from './configs/app.config';

// Handlers
import { noEndpointHandler } from './handlers/no-endpoint.handler';

// Create express app
const app = express();

// Set general middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set routes
app.use("/", appRoutes);

// Set no endpoint handler
app.use(noEndpointHandler);

// Start server
app.listen(appConfig.port, () => console.log(`Server running on port ${appConfig.port}`));