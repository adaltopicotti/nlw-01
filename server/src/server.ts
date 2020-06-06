import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// ROTAS
// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST: http://localhost:3333/users = Criar usuário
// GET: http://localhost:3333/users = Listar usuários
// GET: http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// TIPOS DE PARÂMETROS
// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação...
// Request Body: Parâmetros para criação/atualização de informações

// DATABASE
// SELECT * FROM users WHERE name = 'Adalto'
// knex('users').where('name', 'Adalt').select('*')


app.listen(3333);
