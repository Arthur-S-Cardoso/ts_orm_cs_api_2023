import {Router} from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import LocalController from './app/controllers/LocalController';

const router = Router();

router.get('/endereco/list', EnderecoController.list);
router.get('/local/lis', LocalController.list);

export default router;