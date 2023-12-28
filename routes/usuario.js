import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const usuarioRouter = express.Router();

usuarioRouter.get('/usuarios', async(req,res)=>{
    const usuarios = await prisma.usuario.findMany();
    res.render('showUsuarios',{
        usuarios:usuarios
    })
})
usuarioRouter.get('/nuevoUsuario',async (req,res)=>{
    const usuario = await prisma.usuario.findFirst({where:{ id_usuario:0} })
    res.render('newUsuario',{usuario:usuario})
})
usuarioRouter.post('/nuevoUsuario',async (req,res)=>{
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
usuarioRouter.get('/editarUsuario/:id', async(req,res)=>{
    let id = req.params.id;
    
    const usuario = await prisma.usuario.findFirst({where:{id_usuario:parseInt(id)}})
    
    res.render('newUsuario',{
        usuario:usuario
    })
})
usuarioRouter.post('/editarUsuario', async(req,res)=>{
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
usuarioRouter.get('/borrarUsuario/:id', async(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    await prisma.usuario.delete({
        where:{
            id_usuario : id
        }
    })
    
    res.redirect('/usuarios')
})

export default usuarioRouter;