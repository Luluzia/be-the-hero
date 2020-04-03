const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / recurso
 */

/**
 * Método HTTP:
 *
 * GET: Buscar/listar informação do back-end
 * POST: Criar informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 *
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após o "?"(filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);
