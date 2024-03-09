require('dotenv').config()
const {createServer} = require('@lhci/server');

console.log('Starting server...');
createServer({
  port: process.env.PORT,
  storage: {
    storageMethod: 'sql',
    sqlDialect: process.env.SQL_DIALECT,
    sqlDatabasePath: process.env.SQL_DATABASE_PATH,
    sqlConnectionUrl: process.env.DATABASE_URL,
  },
}).then(({port}) => console.log('LHCI listening on port', port));