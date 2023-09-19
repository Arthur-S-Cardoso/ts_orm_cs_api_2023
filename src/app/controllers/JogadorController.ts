import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/Jogador';
import Endereco from '../models/Endereco';

class JogadorController {

    async list(req: Request, res: Response){

        const repository = getRepository(Jogador);
        //retorna uma lista de objetos contendo os registros de tb_jogador
        const lista = await repository.find();

        //retorna uma lsita de objetos contendos os registros de tb_jogador e mais as vinculações com tb_endereco, caso exista.
        //const lista = await repository.createQueryBuilder('tb_jogador').innerJoinAndSelect("tb_jogador.endereco", "endereco").getMany();


        //const lista = await repository.createQueryBuilder('tb_jogador').innerJoinAndSelect("tb_jogador.endereco", "endereco").leftJoinAndSelect("tb_jogador.patentes", "patente").getMany();

        return res.json(lista);
    }

    async store(req: Request, res: Response){

        const repository = getRepository(Jogador);//recupera o repositorio do jogador.

        console.log(req.body);//imprime na saida padrão a mensagem recebida. Isso é apenas para teste...

        const {nickname} = req.body;//extrai os atributos nickname do corpo da mensagem.

        const nicknameExists = await repository.findOne({where : {nickname}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        if(nicknameExists){

            return res.sendStatus(409);//caso exista um registro, retorna 409 informando o conflito

        }

        const j = repository.create(req.body);//cria a entidade Jogador.

        await repository.save(j);//efetiva a operacao de insert.

        return res.json(j);//retorna o bojeto json no response.
        
    }
    //código fonte referente ao pdf da parte 6.
    async delete(req: Request, res: Response){

        const repository = getRepository(Jogador);//recupera o repositorio do jogador.

        const {nickname} = req.body;//extrai os atributos nickname e endereco do corpo da mensagem.
        
        const nicknameExists = await repository.findOne({where :{nickname}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        if(nicknameExists){
        
            await repository.remove(nicknameExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar jogador para remover, retorna o codigo 404.
        }
    }

    //código fonte referente ao pdf da parte 6.
    async update(req: Request, res: Response){
    
        const repository = getRepository(Jogador);//recupera o repositorio do jogador.
    
        const {nickname, endereco} = req.body;//extrai os atributos nickname e endereco do corpo da mensagem.
    
        const nicknameExists = await repository.findOne({where :{nickname}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.
        const enderecoExists = await getRepository(Endereco).findOne({where : {"id" : endereco.id}});//consulta na tabela se existe um registro com o mesmo endereco da mensagem.
        
        if(!endereco || !nicknameExists || !enderecoExists){
                return res.sendStatus(404);
        }
        
        const j = repository.create(req.body); //cria a entidade Jogador
        
        await repository.save(j); //persiste (update) a entidade na tabela.
        
        return res.json(j);
    }
       

}

export default new JogadorController();