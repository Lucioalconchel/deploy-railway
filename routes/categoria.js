import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const categoriaRouter = express.Router();

categoriaRouter.get('/categorias', async(req,res)=>{
    const categorias = await prisma.categoria.findMany();
    res.render('showCategorias',{
        categorias:categorias
    })
})
categoriaRouter.get('/nuevaCategoria', async(req,res)=>{
    const categoria = await prisma.categoria.findFirst({where:{id_categoria:0}})
    res.render('newCategoria',{categoria:categoria})
})
categoriaRouter.post('/nuevaCategoria', async(req,res)=>{
    const {categoria} = req.body
    await prisma.categoria.create({
        data:{
            categoria : categoria
        }
    })
    res.redirect('/categorias')
})
categoriaRouter.get('/editarCategoria/:id', async(req,res)=>{
    let id = req.params.id;
    
    let categoria = await prisma.categoria.findMany({where:{id_categoria:parseInt(id)}})
    res.render('newCategoria',{categoria:categoria[0]})
})
categoriaRouter.post('/editarCategoria', async(req,res)=>{
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
categoriaRouter.get('/borrarCategoria/:id', async(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    await prisma.categoria.delete({
        where:{
            id_categoria : id
        }
    })
    res.redirect('/categorias')
})

export default categoriaRouter