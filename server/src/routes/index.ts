import { Express } from 'express';
import userRoutes from './user.routes';
import swaggerRoutes from './swagger.routes';

const routes = (app: Express) => {
  userRoutes(app);
  swaggerRoutes(app);
};

export default routes;
