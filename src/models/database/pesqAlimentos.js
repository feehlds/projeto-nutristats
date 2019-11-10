async function pesqAlimento(string){
    let str = string.toLowerCase();
    try{
        let pool = require ('./conexao'); 
        let res = await pool.query("SELECT * FROM pesquisaAlimentos('"+str+"')");
        return res.rows;
    }   catch(err){
        throw(err);
    }
}

module.exports = pesqAlimento;