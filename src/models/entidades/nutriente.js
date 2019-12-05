const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Nutriente = Schema({
   tipoAlimento: {
        type: String
    },
    Descricao: {
        type: String
    },
    Umidade:{
        type: String
    },
    kcal:{
        type: String
    },
    kj:{
       type: String
    },
    Proteina:{
       type: String
    },
    Lipideos:{
       type: String
    },
    Colesterol:{
       type: String
    },
    carboidrato:{
       type: String
    },
    FibraAlimentar:{
       type: String
    },
    Cinzas:{
       type: String
    },
    Calcio:{
       type: String
    },
    Magnesio:{
      type: String
    },
    Manganes:{
       type: String
    },
    Fosforo:{
       type: String
    },
    Ferro:{
       type: String
    },
    Sodio:{
       type: String
    },
    Potassio:{
       type: String
    },
    Cobre:{
       type: String
    },
    Zinco:{
       type: String
    },
    Retinol:{
       type: String
    },
    RE:{
       type: String
    },
    RAE:{
       type: String
    },
    Tiamina:{
       type: String
    },
    Riboflavina:{
       type: String
    },
    Piridoxina:{
       type: String
    },
    Niacina:{
       type: String
    },
    VitaminaC:{
       type: String
    }
});
mongoose.model('nutrientes', Nutriente);