import express from "express";
import bodyParser from "body-parser";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})

app.get('/', (req,res)=>{
    res.send("hola usuario")

})
app.get('/nuevo', async (req,res)=>{
    newUser();
    res.redirect('/')
});
app.get('/usuario', async(req,res)=>{
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios)
})
async function newUser(){
    const user = await prisma.usuario.create({
        data:{
            nombre : "lucio"
        }
    })
    return user;
}