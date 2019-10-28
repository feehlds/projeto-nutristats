client = require ('./conexao');

function pesqAlimento(string){
    let str = "'(.*\\s)?"+ string.toLowerCase() + "\\s?.*'";
    console.log(str);
    let regexp =  new RegExp(str);
    console.log(regexp);
    client.query('SELECT *, (regexp_matches(lower(descricao), ?)) from nutrientes;', [regexp], (err, res) => {
    if (err) console.log(err);
    for(let row of res.rows){
        console.log(JSON.stringify(row));
    }
    client.end();
        return res.rows;
    }); 
}

module.exports = pesqAlimento;