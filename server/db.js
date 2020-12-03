const Pool = require('pg').Pool;
const pool = new Pool(
    {
        host: 'ec2-75-101-212-64.compute-1.amazonaws.com',
        database: 'd5lba05geilg7',
        user: 'ddameowovpwpgz',
        port: 5432,
        password: '2856fef30fa4d831cd3ce4c79dc71b00176d145febdf48245cacb2a78eddd699'
    }
);

module.exports = pool