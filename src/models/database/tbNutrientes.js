const db = require("./conexao");

const nutrientes = db.sequelize.define('nutrientes',{
    tipoalimento: {
        type: db.Sequelize.STRING
    },
    umidade:{
        type: db.Sequelize.STRING
    },
    kcal:{
        type: db.Sequelize.STRING
    },
    kj:{
        type: db.Sequelize.STRING
    },
    proteina:{
        type: db.Sequelize.STRING
    },
    lipideos:{
        type: db.Sequelize.STRING
    },
    colesterol:{
        type: db.Sequelize.STRING
    },
    carboidrato:{
        type: db.Sequelize.STRING
    },
    fibraalimentar:{
        type: db.Sequelize.STRING
    },
    cinzas:{
        type: db.Sequelize.STRING
    },
    calcio:{
        type: db.Sequelize.STRING
    },
    manganes:{
        type: db.Sequelize.STRING
    },
    fosforo:{
        type: db.Sequelize.STRING
    },
    ferro:{
        type: db.Sequelize.STRING
    },
    sodio:{
        type: db.Sequelize.STRING
    },
    potassio:{
        type: db.Sequelize.STRING
    },
    cobre:{
        type: db.Sequelize.STRING
    },
    zinco:{
        type: db.Sequelize.STRING
    },
    retinol:{
        type: db.Sequelize.STRING
    },
    re:{
        type: db.Sequelize.STRING
    },
    rae:{
        type: db.Sequelize.STRING
    },
    tiamina:{
        type: db.Sequelize.STRING
    },
    riboflavina:{
        type: db.Sequelize.STRING
    },
    piridoxina:{
        type: db.Sequelize.STRING
    },
    niacina:{
        type: db.Sequelize.STRING
    },
    vitaminac:{
        type: db.Sequelize.STRING
    }
})
nutrientes.removeAttribute('id');
nutrientes.removeAttribute('createdAt');
nutrientes.removeAttribute('updatedAt');
module.exports = nutrientes;