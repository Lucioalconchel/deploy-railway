import express from "express";
import bodyParser from "body-parser";
import {PrismaClient} from '@prisma/client';
import categoriaRouter from "../desplegar-node/routes/categoria.js";
import productoRouter from '../desplegar-node/routes/producto.js'
import usuarioRouter from '../desplegar-node/routes/usuario.js'
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
