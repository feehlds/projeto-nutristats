client = require ('./conexao');

function pesqAlimento(string){
    let regexp = "(.*\s)?"+ string.toLowerCase() +"\s?.*')";
    console.log('THIS IS THE REGEX: ' + regexp);
    Console.log("SELECT *, (regexp_matches(lower(descricao), ?)) from nutrientes;", [regexp])
    client.query("SELECT *, (regexp_matches(lower(descricao), ?)) from nutrientes;", [regexp], (err, res) => {
    if (err) console.log(err);
    for(let row of res.rows){
        console.log(JSON.stringify(row));
    }
    client.end();
        return res.rows;
    }); 
}

module.exports = pesqAlimento;