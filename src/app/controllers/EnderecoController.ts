import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Endereco from '../models/Endereco';

class EnderecoController {

    // Ele lista todos os possíveis registros da tb_endereco
    async list(req: Request, res: Response){
        const repository = getRepository(Endereco); //Foi importado do typeorm
        const lista = await repository.find(); // find() é uma especie de select | o await serve para o banco aguardar o banco terminar o processo e retonrar as informações para poder continuar o processo no script
        return res.json(lista); //Substitui o metodo sw.get dos cogidos anteriores
    }
}

export default new EnderecoController();