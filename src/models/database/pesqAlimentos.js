async function pesqAlimento(string){
    let str = string.toLowerCase();
    try{
<<<<<<< HEAD
        let pool = require ('./conexao'); 
        let res = await pool.query("SELECT * FROM pesquisaAlimentos('"+str+"')");
=======
        let client = require ('./conexao'); 
        client.connect();
        let res = await client.query("SELECT * FROM pesquisaAlimentos('"+str+"')");
        await client.end();   
>>>>>>> 2daf099bc4741fee8fc0f3d8b66da8f0b1b5c407
        return res.rows;
    }   catch(err){
        throw(err);
    }
}

module.exports = pesqAlimento;