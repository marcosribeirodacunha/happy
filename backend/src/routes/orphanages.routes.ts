import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import orphanagesController from '../controller/OrphanagesController';

const router = Router();
const upload = multer(uploadConfig);

router.get('/', orphanagesController.index);
router.get('/:id', orphanagesController.show);
router.post('/', upload.array('images'), orphanagesController.create);

export default router;
