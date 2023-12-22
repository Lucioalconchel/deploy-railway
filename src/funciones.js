const inicio = document.querySelector('#Inicio');

const nuevoUsuario = document.querySelector('#NuevoUsuario');
const nuevoProducto = document.querySelector('#NuevoProducto');
const nuevaCategoria = document.querySelector('#NuevaCategoria');

const usuarios = document.querySelector('#Usuarios');
const productos = document.querySelector('#Productos');
const categorias = document.querySelector('#Categorias');

inicio.addEventListener('click',()=>{
    window.location.href='/';
})
//====================================================
nuevoUsuario.addEventListener('click',()=>{
    window.location.href='/nuevoUsuario';
})
nuevoProducto.addEventListener('click',()=>{
    window.location.href='/nuevoProducto';
})
nuevaCategoria.addEventListener('click',()=>{
    window.location.href='/nuevaCategoria';
})
//====================================================
usuarios.addEventListener('click',()=>{
    window.location.href='/usuarios';
})
productos.addEventListener('click',()=>{
    window.location.href='/productos';
})
categorias.addEventListener('click',()=>{
    window.location.href='/categorias';
})
