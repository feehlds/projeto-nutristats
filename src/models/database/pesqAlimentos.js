async function pesqAlimento(string){
    let str = string.toLowerCase();
    try{
        let client = require ('./conexao'); 
        client.connect();
        let res = await client.query("SELECT * FROM pesquisaAlimentos('"+str+"')");
        client.end();   
        return res.rows;
    }   catch(err){
        throw(err);
    }
}

module.exports = pesqAlimento;