import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { TrackingRoutes } from '../modules/tracking/tracking.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path:'/tracking',
    route: TrackingRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;