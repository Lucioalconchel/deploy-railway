import express from "express";
import bodyParser from "body-parser";
import {PrismaClient} from '@prisma/client';
//=========================================================
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;
//=========================================================
app.use(bodyParser.urlencoded({extended:true}));
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
//===================USUARIOS======================================
app.get('/usuarios', async(req,res)=>{
    const usuarios = await prisma.usuario.findMany();
    res.render('showUsuarios',{
        usuarios:usuarios
    })
})
app.get('/nuevoUsuario',async (req,res)=>{
    const usuario = await prisma.usuario.findFirst({where:{ id_usuario:0} })
    res.render('newUsuario',{usuario:usuario})
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
app.get('/editarUsuario/:id', async(req,res)=>{
    let id = req.params.id;
    
    let usuarios = await prisma.usuario.findMany()
    const usuario = usuarios.find(user => user.id_usuario === parseInt(id));
    let usuario2 = await prisma.usuario.findFirst({where:{id_usuario:0}})
    console.log(usuario2 === null)
    res.render('newUsuario',{
        usuario:usuario
    })
})
app.post('/editarUsuario', async(req,res)=>{
    let {id_usuario} = req.body;
    const {nombre} = req.body;
    const {apellido} = req.body;
    const {email} = req.body;
    
    await prisma.usuario.update({
        where:{
            id_usuario : parseInt(id_usuario)
        },
        data:{
            nombre : nombre,
            apellido : apellido,
            email : email
        }
    })
    res.redirect('/usuarios')
})
app.get('/borrarUsuario/:id', async(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    await prisma.usuario.delete({
        where:{
            id_usuario : id
        }
    })
    
    res.redirect('/usuarios')
})
//====================PRODUCTOS=====================================
app.get('/productos', async(req,res)=>{
    const productos = await prisma.producto.findMany()
    res.render('showProductos',{
        productos:productos
    })
})
app.get('/nuevoProducto', async(req,res)=>{
    const categorias = await prisma.categoria.findMany();
    const producto = await prisma.producto.findFirst({where:{id_producto:0}})
    res.render('newProducto',{
        categorias:categorias,
        producto:producto
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
app.get('/editarProducto/:id', async(req,res)=>{
    let id = req.params.id;
    
    let producto = await prisma.producto.findMany({where:{id_producto:parseInt(id)}})
    const categorias = await prisma.categoria.findMany()
    res.render('newProducto',{producto:producto[0], categorias:categorias})
})
app.post('/editarProducto', async(req,res)=>{
    let {id_producto} = req.body;
    const {marca} = req.body;
    const {descripcion} = req.body;
    const {precio} = req.body;
    const {stock} = req.body;

    await prisma.producto.update({
        where:{
            id_producto : parseInt(id_producto)
        },
        data:{
            marca: marca,
            descripcion: descripcion,
            precio: parseFloat(precio),
            stock: parseInt(stock)
        }
    })
    res.redirect('/productos')
})
app.get('/borrarProducto/:id', async(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    await prisma.producto.delete({
        where:{
            id_producto: id
        }
    })
    res.redirect('/productos')
})
//========================CATEGORIAS==================================
app.get('/categorias', async(req,res)=>{
    const categorias = await prisma.categoria.findMany();
    res.render('showCategorias',{
        categorias:categorias
    })
})
app.get('/nuevaCategoria', async(req,res)=>{
    const categoria = await prisma.categoria.findFirst({where:{id_categoria:0}})
    res.render('newCategoria',{categoria:categoria})
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
app.get('/editarCategoria/:id', async(req,res)=>{
    let id = req.params.id;
    
    let categoria = await prisma.categoria.findMany({where:{id_categoria:parseInt(id)}})
    res.render('newCategoria',{categoria:categoria[0]})
})
app.post('/editarCategoria', async(req,res)=>{
    const {id} = req.body;
    const {categoria} = req.body;
    await prisma.categoria.update({
        where:{
            id_categoria: parseInt(id)
        },
        data:{
            categoria:categoria
        }
    })
    res.redirect('/categorias')
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
