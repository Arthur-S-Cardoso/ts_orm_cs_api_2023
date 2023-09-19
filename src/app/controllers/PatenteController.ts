import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Patente from '../models/Patente';

class PatenteController {

    // Ele lista todos os possíveis registros da tb_local
    async list(req: Request, res: Response){
        const repository = getRepository(Patente); //Foi importado do typeorm
        const lista = await repository.find(); // find() é uma especie de select | o await serve para o banco aguardar o banco terminar o processo e retonrar as informações para poder continuar o processo no script
        return res.json(lista); //Substitui o metodo sw.get dos cogidos anteriores
    }
    //metodos para inserção, alteração e remoção de Local

    async store(req: Request, res: Response) {

        const repository = getRepository(Patente);//recupera o repositorio de Endereço
        console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }

    //store faz tanto a inserção quanto a alteração

    //codigo fonte referente a parate 11.
    async delete(req: Request, res: Response) {
        try {
            const repository = getRepository(Patente);
            const { id } = req.body;
            const end = await repository.findOne({ where: { "id": id } });
            if (end) {
                await repository.remove(end);
                return res.sendStatus(204);
            } else {
                return res.sendStatus(404);
            }
        } catch (e: unknown) {

            console.log(e);
            return res.sendStatus(500);
        }

    }
}

export default new PatenteController();