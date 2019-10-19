client = require ('./conexao');

function pesqAlimento(string){
    client.connect();
    client.query('SELECT * from nutrientes WHERE descricao LIKE %?%', [string], (err, res) => {
        if (err) console.log(err);

        for(let row of res.rows)
            console.log(JSON.stringify(row));
    client.end();
        return res.rows;
    }); 
}

module.exports = pesqAlimento;