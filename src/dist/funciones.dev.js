"use strict";

var inicio = document.querySelector('#Inicio');
var nuevoUsuario = document.querySelector('#NuevoUsuario');
var nuevoProducto = document.querySelector('#NuevoProducto');
var nuevaCategoria = document.querySelector('#NuevaCategoria');
var usuarios = document.querySelector('#Usuarios');
var productos = document.querySelector('#Productos');
var categorias = document.querySelector('#Categorias');
inicio.addEventListener('click', function () {
  window.location.href = '/';
}); //====================================================

nuevoUsuario.addEventListener('click', function () {
  window.location.href = '/nuevoUsuario';
});
nuevoProducto.addEventListener('click', function () {
  window.location.href = '/nuevoProducto';
});
nuevaCategoria.addEventListener('click', function () {
  window.location.href = '/nuevaCategoria';
}); //====================================================

usuarios.addEventListener('click', function () {
  window.location.href = '/usuarios';
});
productos.addEventListener('click', function () {
  window.location.href = '/productos';
});
categorias.addEventListener('click', function () {
  window.location.href = '/categorias';
});