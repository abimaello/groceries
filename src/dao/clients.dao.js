 //intancia del modelo es Product
import Client from '../models/clients.model.js';

const clientDAO={}//Objeto 

clientDAO.getClients=async()=>{
    const client=await Client.find();
    return client;
};

clientDAO.insertClient=async(client)=>{
    const clientSaved=new Client(client);
    await clientSaved.save(); //Para guardar la instancia del modelo product
    return true;
}


clientDAO.updateClient=async(username,client)=>{
    const clientUpdated=await Client.findOneAndUpdate({user:username},client)
    if(clientUpdated!=null){
        return true;
    }else{
        return false;
    } 
}

clientDAO.getClient=async(username)=>{
    const client=await Client.findOne({user:username});
    return client;
};



clientDAO.deleteClient = async (username) => {
    try {
        const clientDelete = await Client.findOneAndDelete({ user: username });
        if (clientDelete != null) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false; // Manejo de errores: devolver falso si hay un error
    }
};



export default clientDAO;