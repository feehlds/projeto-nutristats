var client = require ('./conexao');

function pesqAlimento(string){
    let str = string.toLowerCase();
    console.log(str);
    client.connect()
    client.query("SELECT * FROM pesquisaAlimentos('?')", [str], (err, res) => {
    if (err) console.log(err);
    for(let row of res.rows){
        console.log(JSON.stringify(row));
    }
    console.log('consulta feita!');
    client.end(); 
     return res.rows;
    }); 
}

module.exports = pesqAlimento;