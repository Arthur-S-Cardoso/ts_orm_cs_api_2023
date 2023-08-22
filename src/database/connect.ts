import {createConnection} from 'typeorm';
createConnection().then(() => console.log('Conectou no Banco de dados!!'));