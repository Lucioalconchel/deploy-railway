import express from "express";
import bodyParser from "body-parser";
import {PrismaClient} from '@prisma/client';
import categoriaRouter from "./routes/categoria.js";
import productoRouter from './routes/producto.js'
import usuarioRouter from './routes/usuario.js'
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
app.use(categoriaRouter);
app.use(productoRouter)
app.use(usuarioRouter);
//=========================================================
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})
app.get('/', (req,res)=>{
    res.render('home');
})
//=========================================================
// app.get('/comentarios', async(req,res)=>{
//     const comentarios = await prisma.categoria.findMany();
//     res.render('showComentarios',{comentarios:comentarios})
// })
// app.get('/nuevoComentario', async (req,res)=>{
//     const usuarios = await prisma.usuario.findMany();
//     res.render('newComentario',{usuarios:usuarios});
// })
// app.post('/nuevoComentario', async(req,res)=>{
//     const {usuarios} = req.body;
//     const {descripcion} = req.body;
//     await prisma.comentario.create({
//         data:{
//             id_usuario:usuarios,
//             descripcion:descripcion
//         }
//     })
//     res.redirect('/')
// })
