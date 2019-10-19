client = require ('./conexao');

function pesqAlimento(string){
    client.query('SELECT * from nutrientes WHERE descricao LIKE %?%', [string], (err, res) => {
        if (err) console.log(err);

        for(let row in res.rows)
            console.log(row)
        return res.rows;
    }); 
}

module.exports = pesqAlimento;