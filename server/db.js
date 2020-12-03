const Pool = require('pg').Pool;
const pool = new Pool(
    {
        host: '#',
        database: '#',
        user: '#',
        port: 5432,
        password: '#'
    }
);

module.exports = pool
