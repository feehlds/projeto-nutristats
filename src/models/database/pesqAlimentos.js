client = require ('./conexao');

client.connect();

function pesqAlimento(string){
    client.connect();
    client.query('SELECT * from nutrientes WHERE descricao LIKE %?%', [string], (err, res) => {
        if (err) throw err;
        return res.rows;
    }); 
}