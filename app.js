import express from "express";
import bodyParser from "body-parser";
import {PrismaClient} from '@prisma/client';
import e from "express";
//=========================================================
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;
//=========================================================
app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());
//=========================================================
app.set('views','./views');
app.set('view engine', 'ejs');
//=========================================================
app.use(express.static('./views'));
app.use(express.static('./css'));
app.use(express.static('./src'));
//=========================================================
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})
app.get('/', (req,res)=>{
    res.render('home');
})
//=========================================================
app.get('/nuevoUsuario',(req,res)=>{
    //res.send("Esta como loquita")
    res.render('nuevoUsuario')
})
app.post('/nuevoUsuario',async (req,res)=>{
    const {nombre} = req.body;
    const {apellido} = req.body;
    const {email} = req.body;
    await prisma.usuario.create({
        data:{
            nombre : nombre,
            apellido : apellido,
            email: email
        }
    })
    res.redirect('/usuarios')
})
app.get('/usuarios', async(req,res)=>{
    const usuarios = await prisma.usuario.findMany();
    res.render('usuarios',{
        usuarios:usuarios
    })
})
app.get('/borrarUsuario/:id', async(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    await prisma.usuario.delete({
        where:{
            id : id
        }
    })
    
    res.redirect('/usuarios')
})
//=========================================================
app.get('/nuevoProducto', async(req,res)=>{
    const categorias = await prisma.categoria.findMany();
    res.render('nuevoProducto',{
        categorias:categorias
    })
})
app.post('/nuevoProducto', async (req,res)=>{
    let {categoria} = req.body;
    let {marca} = req.body;
    let {descripcion} = req.body;
    let {precio} = req.body;
    let {stock} = req.body;

    categoria = parseInt(categoria)
    precio=parseFloat(precio);
    stock=parseInt(stock);

    await prisma.producto.create({
        data:{
            id_categoria : categoria,
            marca: marca,
            descripcion : descripcion,
            precio: precio,
            stock : stock
        }
    })
    res.redirect('/productos')
})
app.get('/productos', async(req,res)=>{
    const productos = await prisma.producto.findMany()
    res.render('productos',{
        productos:productos
    })
})
app.get('/borrarProducto/:id', async(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    await prisma.producto.delete({
        where:{
            id: id
        }
    })
    res.redirect('/productos')
})
//==========================================================
app.get('/nuevaCategoria', (req,res)=>{
    res.render('nuevaCategoria')
})
app.post('/nuevaCategoria', async(req,res)=>{
    const {categoria} = req.body
    await prisma.categoria.create({
        data:{
            categoria : categoria
        }
    })
    res.redirect('/categorias')
})
app.get('/categorias', async(req,res)=>{
    const categorias = await prisma.categoria.findMany();
    res.render('categorias',{
        categorias:categorias
    })
})
app.get('/borrarCategoria/:id', async(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    await prisma.categoria.delete({
        where:{
            id_categoria : id
        }
    })
    res.redirect('/categorias')
})
//==========================================================
