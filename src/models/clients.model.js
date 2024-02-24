import { Schema,model } from "mongoose"; //Schema es para crear esos modelos de datos
const clientSchema=new Schema ({
    clientnumber:{
        type:String,
        unique:true,
        require:true
    },
        name:String,
        address:String,
        tel:String,
        email:String,
        user:String
    
},{
    versionKey:false,
    timeseries:true  //cuando se creo el docuemtno y la fecha de la ultima actualziacion
});

export default model('clients',clientSchema);