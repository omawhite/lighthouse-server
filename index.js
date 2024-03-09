const {createServer} = require('@lhci/server');

console.log('Starting server...');
createServer({
  port: process.env.PORT,
  storage: {
    storageMethod: 'sql',
    sqlDialect: 'postgres',
    sqlConnectionUrl: process.env.DATABASE_URL,
  },
}).then(({port}) => console.log('LHCI listening on port', port));