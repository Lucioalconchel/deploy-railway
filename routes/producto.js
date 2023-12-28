import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const productoRouter = express.Router();

productoRouter.get('/productos', async(req,res)=>{
    const productos = await prisma.producto.findMany()
    res.render('showProductos',{
        productos:productos
    })
})
productoRouter.get('/nuevoProducto', async(req,res)=>{
    const categorias = await prisma.categoria.findMany();
    const producto = await prisma.producto.findFirst({where:{id_producto:0}})
    res.render('newProducto',{
        categorias:categorias,
        producto:producto
    })
})
productoRouter.post('/nuevoProducto', async (req,res)=>{
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
productoRouter.get('/editarProducto/:id', async(req,res)=>{
    let id = req.params.id;
    
    let producto = await prisma.producto.findMany({where:{id_producto:parseInt(id)}})
    const categorias = await prisma.categoria.findMany()
    res.render('newProducto',{producto:producto[0], categorias:categorias})
})
productoRouter.post('/editarProducto', async(req,res)=>{
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
productoRouter.get('/borrarProducto/:id', async(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    await prisma.producto.delete({
        where:{
            id_producto: id
        }
    })
    res.redirect('/productos')
})

export default productoRouter;