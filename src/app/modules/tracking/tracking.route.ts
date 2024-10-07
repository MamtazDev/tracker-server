import express from 'express';
import { TrackingController } from './tracking.controller';
const router = express.Router();

router.get(
  '/init',
  TrackingController.init
);

router.post("create",
  TrackingController.create
)


export const TrackingRoutes = router;
