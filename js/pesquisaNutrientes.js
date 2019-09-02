function pesquisar(string1){
    const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();
    client.query('SELECT * FROM nutrientes WHERE Descricao LIKE _' + string1 +'_ ;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
          document.write('ola'+JSON.stringify(row))
        }
        client.end();
      });
}