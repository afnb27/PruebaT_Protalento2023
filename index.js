const express = require ('express')
const { Logger } = require('logger')
const app = express ()

app.get('/home', function (req, resp){
    resp.send("Bienvenido al mejor sitio de películas de la región")
})

app.get('/api/home', function (req, resp){
    resp.send("EL CATÁLOGO DE PELLÍCULAS AÚN ESTÁ EN CONSTRUCCIÓN")
})

app.get('/api/cines', function (req, resp){
    resp.send("EL CATÁLOGO DE CINES AÚN ESTÁ EN CONSTRUCCIÓN")
})

app.get('/api/movie/expoferia', function (req, resp){
    resp.send("GRAN ESTRENO DE LA NUEVA TEMPORADA DE BETTY LA FEA")
})

app.get("api/movie/expoferia/img/:id",function(req, res){ 
         res.sendFile(path.join(__dirname, './data/img/'+req.params['id']+'.jpg'));
 });


 const port= 3000 
app.listen (port, () => {
    console.log("servidor en ejecución en:"  +`http://localhost:${port}`)
})

