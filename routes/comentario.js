import express from 'express';
import { PrismaClient } from '@prisma/client';

const comentarioRouter = express.Router();
const prisma = new PrismaClient();

comentarioRouter.get('/comentarios', async(req,res)=>{
    const comentarios = await prisma.comentario.findMany();
    const usuarios = await prisma.usuario.findMany()
    res.render('showComentarios',{comentarios:comentarios, usuarios:usuarios})
})
comentarioRouter.get('/nuevoComentario', async (req,res)=>{
    const usuarios = await prisma.usuario.findMany();
    const comentario = await prisma.comentario.findFirst({where:{id_comentario:0}})
    res.render('newComentario',{usuarios:usuarios, comentario:comentario});
})
comentarioRouter.post('/nuevoComentario', async(req,res)=>{
    let {usuario} = req.body;
    const {descripcion} = req.body;
    
    await prisma.comentario.create({
        data:{
            descripcion:descripcion,
            usuario:{
                connect:{
                    id_usuario: parseInt(usuario)
                }
            }
        }
    })
    res.redirect('/comentarios')
})
comentarioRouter.get('/editarComentario/:id', async(req,res)=>{
    let{id} = req.params;
    const comentario = await prisma.comentario.findFirst({where:{id_comentario:parseInt(id)}})
    res.render('newComentario',{comentario:comentario})
})
comentarioRouter.post('/editarComentario', async(req,res)=>{
    let {id_comentario} = req.body;
    const {descripcion} = req.body;
    const comentario = await prisma.comentario.update({where:{id_comentario: parseInt(id_comentario)},data:{descripcion:descripcion}})
    res.redirect('/comentarios')
})
comentarioRouter.get('/borrarComentario/:id', async(req,res)=>{
    let {id} = req.params;
    const comentario = await prisma.comentario.delete({where:{id_comentario:parseInt(id)}})
    res.redirect('/comentarios')
})

export default comentarioRouter;
