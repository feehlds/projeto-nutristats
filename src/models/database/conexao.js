const { Pool } = require('pg')

const pool = new Pool({
    connectionString: 'postgres://xdgwlloffjytim:c159562ff141e013ed13fdb422feee78eee9de55df0e3933730490f7c4fe6e53@ec2-23-23-182-18.compute-1.amazonaws.com:5432/d34imgphjhpkrv',
    ssl: true,
});

module.exports = pool;