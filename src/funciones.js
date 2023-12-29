const inicio = document.querySelector('#Inicio');

const nuevoUsuario = document.querySelector('#NuevoUsuario');
const nuevoProducto = document.querySelector('#NuevoProducto');
const nuevaCategoria = document.querySelector('#NuevaCategoria');
const nuevoComentario = document.querySelector('#NuevoComentario')

const usuarios = document.querySelector('#Usuarios');
const productos = document.querySelector('#Productos');
const categorias = document.querySelector('#Categorias');
const comentarios = document.querySelector('#Comentarios');

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
nuevoComentario.addEventListener('click',()=>{
    window.location.href='/nuevoComentario';
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
comentarios.addEventListener('click',()=>{
    window.location.href='/comentarios';
})
//====================================================
const btnBorrarUsuario = document.getElementsByClassName('borrarUsuario')
const btnBorrarProducto = document.getElementsByClassName('borrarProducto')
const btnBorrarCategoria = document.getElementsByClassName('borrarCategoria')

for(let elemento of btnBorrarUsuario){
    elemento.addEventListener('click', function(){
        let id = this.getAttribute('id');
        window.location.href= `/borrarUsuario/${id}`;
    })
}
for(let elemento of btnBorrarProducto){
    elemento.addEventListener('click', function(){
        let id = this.getAttribute('id');
        window.location.href= `/borrarProducto/${id}`;
    })
}
for(let elemento of btnBorrarCategoria){
    elemento.addEventListener('click', function(){
        let id = this.getAttribute('id');
        window.location.href= `/borrarCategoria/${id}`;
    })
}

//====================================================
//(aca se define el btn para editar)
const btnEditarUsuario = document.getElementsByClassName('editarUsuario')
for(let elemento of btnEditarUsuario){
    elemento.addEventListener('click', function(){
        let id = this.getAttribute('id');
        window.location.href= `/editarUsuario/${id}`;
    })
}

const btnEditarProducto = document.getElementsByClassName('editarProducto')
for(let elemento of btnEditarProducto){
    elemento.addEventListener('click', function(){
        let id = this.getAttribute('id');
        window.location.href= `/editarProducto/${id}`;
    })
}

const btnEditarCategoria = document.getElementsByClassName('editarCategoria')
for(let elemento of btnEditarCategoria){
    elemento.addEventListener('click', function(){
        let id = this.getAttribute('id');
        window.location.href= `/editarCategoria/${id}`;
    })
}

const btnBorrarComentario = document.getElementsByClassName('borrarComentario')
for(let elemento of btnBorrarComentario){
    elemento.addEventListener('click', function(){
        let id = this.getAttribute('id');
        window.location.href= `/borrarComentario/${id}`;
    })
}


const btnEditarComentario = document.getElementsByClassName('editarComentario')
for(let elemento of btnEditarComentario){
    elemento.addEventListener('click', function(){
        let id = this.getAttribute('id');
        window.location.href= `/editarComentario/${id}`;
    })
}

