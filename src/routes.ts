import {Router} from 'express';
import EnderecoController from './app/controllers/EnderecoController';

const router = Router();

router.get('/endereco/list', EnderecoController.list);

export default router;