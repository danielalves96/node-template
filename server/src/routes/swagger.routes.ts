import { Express } from 'express';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';
import { docs, swagger } from '@/controllers/swagger.controller';

const swaggerRoutes = (app: Express) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  app.get('/swagger', swagger);
  app.get('/docs', docs);
};

export default swaggerRoutes;
