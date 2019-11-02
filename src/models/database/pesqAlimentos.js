var client = require ('./conexao');

function pesqAlimento(string){
    let str = string.toLowerCase();
    console.log(str);
    client.query("SELECT *, (regexp_matches(lower(descricao), '(.*\\s)?" + str + "\\s?.*?')) from nutrientes;", (err, res) => {
    if (err) console.log(err);
    for(let row of res.rows){
        console.log(JSON.stringify(row));
    }
    console.log('consulta feita!'); 
        return res.rows;
    }); 
}

module.exports = pesqAlimento;