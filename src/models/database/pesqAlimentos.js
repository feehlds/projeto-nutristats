async function pesqAlimento(string){
    let str = string.toLowerCase();
    try{

        let pool = require ('./conexao'); 
        let res = await pool.query("SELECT * FROM pesquisaAlimentos('"+str+"')");

        let client = require ('./conexao'); 
        client.connect();
        let res = await client.query("SELECT * FROM pesquisaAlimentos('"+str+"')");
        await client.end();   


        return res.rows;
    }   catch(err){
        throw(err);
    }
}

module.exports = pesqAlimento;