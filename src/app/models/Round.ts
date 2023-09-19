import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable} from 'typeorm';

import Partida from '../models/Partida';


@Entity('tb_round')
export default class Round {

    @PrimaryColumn()
    numero: number;

    //associação.
    @ManyToOne(type => Partida)
    @JoinColumn({name: "partida_id", referencedColumnName: "id"})
    partida: Partida;

}