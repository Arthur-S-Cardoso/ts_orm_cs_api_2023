import {Entity, Column, PrimaryColumn} from 'typeorm';
@Entity('tb_local')
class Local {

 @PrimaryColumn('int')
 id: number;

 @Column("varchar", { length: 500 })
 nome: string;
 @Column("varchar", { length: 100 })
 latitude: string;
 @Column("varchar", { length: 100 })
 longitude: string;

}
export default Local;