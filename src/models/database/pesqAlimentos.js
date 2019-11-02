var client = require ('./conexao');

function pesqAlimento(string){
    let str = string.toLowerCase();
    client.connect();
    client.query("SELECT * FROM pesquisaAlimentos('"+str+"')", (err, res) => {
    if (err) console.log(err);
    client.end();
    console.log(JSON.stringify(res.rows));
    return res.rows;
    }); 
}

module.exports = pesqAlimento;