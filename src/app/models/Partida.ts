import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm';

import Round from '../models/Round';

@Entity('tb_partida')
export default class Partida {

    @PrimaryGeneratedColumn()
    id: number;

    //coluna opcional
    @Column('date', {nullable: true})
    inicio: Date;
    
    //coluna opcional, caso nao seja informado data, vai recebere a data corrente.
    @Column('date', {default: () => 'CURRENT_TIMESTAMP'})
    fim: Date;

    //agregacao por composicao
    @OneToMany(() => Round, round => round.partida)
    rounds: Round[];    

}