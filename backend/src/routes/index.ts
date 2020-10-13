import { Router } from 'express';
import orphanagesRoutes from './orphanages.routes';

const router = Router();

router.use('/orphanages', orphanagesRoutes);

export default router;
