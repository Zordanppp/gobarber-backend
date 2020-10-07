import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

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
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayAvailabilityController.index,
);
providesRouter.get(
  '/providers/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvailabilityController.index,
);

export default providesRouter;
