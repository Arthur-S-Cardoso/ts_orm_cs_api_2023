import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_patente')
class Patente {//codigo fonte referente ao pdf da parte 7.

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nome: string;

    @Column('text')
    cor: string;
}
export default Patente;