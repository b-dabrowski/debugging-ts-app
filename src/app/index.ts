import { routes } from "./routes";
import {
  appErrorHandler,
  notFoundErrorHandler,
} from "./handlers/error-handler";
import express from 'express';

const createApp = async () => {    
  const app: express.Application = express();
  app.use(express.json());
  app.use(routes);
  app.use(notFoundErrorHandler);
  app.use(appErrorHandler);
  
  return app;
}


export { createApp };
