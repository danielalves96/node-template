import { Express } from 'express';
import {
  create,
  get,
  getId,
  remove,
  update,
} from '@/controllers/user.controller';

const userRoutes = (app: Express) => {
  app.post('/user', create);
  app.get('/user', get);
  app.get('/user/:id', getId);
  app.put('/user/:id', update);
  app.delete('/user/:id', remove);
};

export default userRoutes;
