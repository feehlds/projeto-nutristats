const localStraty = require("passport-local").Strategy
const bcrypt = require("bcryptjs")
var ObjectId = require("mongodb").ObjectId;
const mongo = require('../src/models/database/conexaoMongo');
module.exports = function(passport){
    passport.use(new localStraty({usernameField: 'login', passwordField: 'pass'}, (userName,senha,done) =>{
        mongo.connect((err)=>{
            const bdUsuario = mongo.db("nutristats");
            bdUsuario.collection('usuario').findOne({nomeUsuario: userName}).then( (usuario)=>{
                if(!usuario){
                    return done(null,false,{message: "Esta conta não existe"})
                }
    
                bcrypt.compare(senha, usuario.senha, (erro, batem) =>{
                    if(batem){
                       
                        return done(null, usuario)
          
                    }else{
                        console.log('entrou aqui')  
                        //return done(null,false,{message: "Senha incorreta"})
                    }
                });
             }).catch((erro)=>{
               
                 console.log("Erro:" + erro);
             });
             
        });  
    }));
    passport.serializeUser((usuario,done)=>{
        done(null, usuario._id);
    })
    passport.deserializeUser((id,done) =>{
        mongo.connect((err)=>{
            const bdUsuario = mongo.db("nutristats");
            bdUsuario.collection('usuario').findOne(new ObjectId(id)).then( (usuario)=>{
                done(err, usuario);
                
             });
            
        });

    })

}