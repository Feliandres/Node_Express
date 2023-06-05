
const express = require('express')
const app = express()

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



/*

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send("Landing page - Grupo #2")
})

app.get('/integrantes', (req, res) => {
    res.json([
        {
            "nombre": "Marlon",
            "apellido": "Lalangui",
            "edad": 20
        },
        {
            "nombre": "Josue",
            "apellido": "Salazar",
            "edad": 21
        },
        {
            "nombre": "Melani",
            "apellido": "Molina",
            "edad": 20
        },
        {
            "nombre": "Wilson",
            "apellido": "Guayanay",
            "edad": 22
        },
        {
            "nombre": "Katherine",
            "apellido": "Cangahuamin",
            "edad": 22
        }
    ])
})

app.get('/products', (req, res) => {
    res.send(`
    <h1>Catálogo de productos</h1>
    <p>Bienvenidos</p>
    
       <style>
            body {
                text-align: center;
            }
    
            h1 {
                color: #333;
            }
    
            .product-list {
                list-style-type: none;
                padding: 0;
                margin: 20px 0;
            }
    
            .product-list li {
                margin-bottom: 10px;
            }
    
            .product-list li span {
                display: inline-block;
                width: 100px;
                text-align: left;
            }
    
            .btn {
                display: inline-block;
                padding: 10px 20px;
                background-color: #333;
                color: #fff;
                text-decoration: none;
                margin: 10px;
            }
    
            .btn:hover {
                background-color: #555;
            }
        </style>
    <body>
    
        <ul class="product-list">
            <li>
                <span>Producto 1:</span>
                <span>$10.00</span>
            </li>
            <li>
                <span>Producto 2:</span>
                <span>$15.00</span>
            </li>
            <li>
                <span>Producto 3:</span>
                <span>$20.00</span>
            </li>
            <!-- Agrega más productos aquí -->
    
        </ul>
    
        <a href="#" class="btn">Guardar compra</a>
        <a href="#" class="btn">Cancelar compra</a>
    </body>
         </html>
                
    `)
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

*/