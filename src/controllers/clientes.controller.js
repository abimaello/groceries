import clientDAO from "../dao/clients.dao.js";

export const clients = (req, res) => {
  res.render('../src/views/pedidos.ejs',{clients}); // Pasando el objeto products a la vista
};

export const insertClient = async (req, res) => {
    try {
      const result = await clientDAO.insertClient(req.body);
      if (result) {
        res.redirect('/api/products/pedidos')
      } 
    } catch (err) {
      res.json({ status: "Server Unavailable" });
    }
  };


export const getClients = (req, res) => {
  clientDAO.getClients()
      .then(clients => {
        if(clients != null)
          res.render('../src/views/pedidos.ejs', { clients: clients}); // Pasando el objeto products a la vista
        else
          res.json({
            status: 'error',
          })
      })
      .catch(err => {
        res.json({
          status: "Servidor no disponible"
        });
      });
  };
  

  export const updateClient = (req, res) => {
    clientDAO.updateClient(req.params.username,req.body)
    .then(result=>{
      if(result)
        res.redirect('/api/products/pedidos')
      else 
          res.json({status:"Service unavailable"});
    })
    .catch(erro=>{
        res.json({
          status:"Server unavailable"
        })
      })
};

export const getClient = (req, res) => {
  clientDAO.getClient(req.params.username)
    .then((client) => {
      if (client !== null) {
        res.render('../src/views/edit.ejs', { client: client });
      } else {
        res.json({
          status: "Product not found"
        });
      }
    })
    .catch(err => {
      console.error(err); // Imprimir el error en la consola para obtener más detalles
      res.json({
        status: "Servidor no disponible"
      });
    });
};


export const deleteClient = (req, res) => {
  clientDAO.deleteClient(req.params.username)
  .then(result=>{
    if(result)
        res.redirect('/api/products/pedidos')
    else 
        res.json({status:"Service unavailable"});
  })
  .catch(erro=>{
      res.json({
        status:"Server unavailable"
      })
    })
};



