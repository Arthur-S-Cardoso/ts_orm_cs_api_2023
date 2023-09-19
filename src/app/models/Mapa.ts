import {Entity, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm';

import Local from '../models/Local';

@Entity('tb_mapa')
export default class Mapa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nome: string;

    //agregacao (losango não preenchido)
    @ManyToMany(() => Local)
    @JoinTable({name : "tb_mapa_local", 
                joinColumn: {name: "mapa_id", 
                                referencedColumnName: "id"}, 
                inverseJoinColumn: {name: "local_id", 
                                    referencedColumnName: "id"}})
    locais: Local[];

   

}