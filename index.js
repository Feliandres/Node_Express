
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Bienvenidos a CATFRIENDS")
})
app.get('/productos',(req,res)=>{
    res.send("Catálogos de nuestros productos")
})
app.get('/contactos',(req,res)=>{
    res.send("Contactanos:  ")
})
app.get('/sobre_nosotros',(req,res)=>{
    res.send("Sobre nosotros")
})

app.get('/imagen',(req,res)=>{
    res.sendFile('./gatos.jpeg',{
        root:__dirname
    })
})

app.get('/user',(req,res)=>{
    res.json({
        "nombre":"Felipe",
        "apellido":"Pazmiño",
        "edad":20,
        "correo": "felipe.pazmino@epn.edu.ec",
        "direccion":{
            "callePrincipal":"Real Audiencia",
            "calleSecundaria":"Nazacota Puento",
        }
    })
})


// RUTAS
app.use(express.json())

app.post('/login',(req,res)=>{
    const {nombre,correo} = req.body
    res.send(`Los datos enviados son: ${nombre} - ${correo}`)
})
//Podemos poner una cierta seguridad a la hora de ingresar
app.get('/usuario/:perfil/foto',(req,res)=>
{
    if(req.params.perfil === "Felipe")
    res.sendFile('./gatos.jpeg',{
        root:__dirname
    })
    else{
        res.send("El usuario incorrecto. Intente de nuevo")
    }
})
// Ruta incorrecta
app.use((req,res)=>{
    res.status(404).send("Error 404 - Pagina no encontrada")
})

console.log(__dirname); 
// Asignación de puerto
app.listen(3000)

console.log("El servidor se esta ejecutando en el puerto 3000");


