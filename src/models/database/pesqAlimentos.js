var client = require ('./conexao');

function pesqAlimento(string){
    let str = string.toLowerCase();
    let result;
    client.connect();
    client.query("SELECT * FROM pesquisaAlimentos('"+str+"')", (err, res) => {
    if (err) console.log(err); 
    result = JSON.stringify(res.rows);
    });
    client.end();
    return result 
}

module.exports = pesqAlimento;