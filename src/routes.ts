import {Router} from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import LocalController from './app/controllers/LocalController';
import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';
import MapaController from './app/controllers/MapaController';
import PartidaController from './app/controllers/PartidaController';
import RoundController from './app/controllers/RoundController';

const router = Router();

//criando  rotas para /enderecos.
// http://localhost:3000/endereco/...
router.get('/endereco/list', EnderecoController.list);//define uma rota ... 
router.post('/endereco/store', EnderecoController.store);//define uma rota vai método post para chamar o método store da classe EnderecoController
router.get('/endereco/delete', EnderecoController.delete);//define uma rota ...
// http://localhost:3000/local/...
router.get('/local/list', LocalController.list);//define uma rota ... 
router.post('/local/store', LocalController.store);//define uma rota vai método post para chamar o método store da classe EnderecoController
router.get('/local/delete', LocalController.delete);//define uma rota ...
// http://localhost:3000/jogador/...
router.get('/jogador/list', JogadorController.list);//define uma rota ... 
router.post('/jogador/store', JogadorController.store);//define uma rota vai método post para chamar o método store da classe EnderecoController
router.get('/jogador/delete', JogadorController.delete);//define uma rota ...
// http://localhost:3000/patente/...
router.get('/patente/list', PatenteController.list);//define uma rota ... 
router.post('/patente/store', PatenteController.store);//define uma rota vai método post para chamar o método store da classe PatenteController
router.get('/patente/delete', PatenteController.delete);//define uma rota ...
// http://localhost:3000/mapa/...
router.get('/mapa/list', MapaController.list);//define uma rota ... 
router.post('/mapa/store', MapaController.store);//define uma rota vai método post para chamar o método store da classe PatenteController
router.get('/mapa/delete', MapaController.delete);//define uma rota ...
// http://localhost:3000/partida/...
router.get('/partida/list', PartidaController.list);//define uma rota ... 
router.post('/partida/store', PartidaController.store);//define uma rota vai método post para chamar o método store da classe PatenteController
router.get('/partida/delete', PartidaController.delete);//define uma rota ...
// http://localhost:3000/round/...
router.get('/round/list', RoundController.list);//define uma rota ... 
router.post('/round/store', RoundController.store);//define uma rota vai método post para chamar o método store da classe PatenteController
router.get('/round/delete', RoundController.delete);//define uma rota ...



export default router;