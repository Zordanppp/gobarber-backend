import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from './../controllers/ProvidersController';
import ProviderDayAvailabilityController from './../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from './../controllers/ProviderMonthAvailabilityController';

const providesRouter = Router();
const providersController = new ProvidersController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

providesRouter.use(ensureAuthenticated);

providesRouter.get('/', providersController.index);
providesRouter.get(
  '/providers/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);
providesRouter.get(
  '/providers/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);

export default providesRouter;
