client = require ('./conexao');

function pesqAlimento(string){
    let str = "'(.*\\s)?"+ string.toLowerCase() + "\\s?.*'";
    console.log(str);
    client.connect();
    client.query('SELECT *, (regexp_matches(lower(descricao), ?)) from nutrientes;', [str], (err, res) => {
    if (err) console.log(err);
    for(let row of res.rows){
        console.log(JSON.stringify(row));
    }
    client.end();
    console.log('consulta feita!'); 
        return res.rows;
    }); 
}

module.exports = pesqAlimento;