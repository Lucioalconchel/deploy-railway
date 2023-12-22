"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _client = require("@prisma/client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//=========================================================
var prisma = new _client.PrismaClient();
var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000; //=========================================================

app.use(_bodyParser["default"].urlencoded({
  "extends": true
}));
app.use(_bodyParser["default"].json()); //=========================================================

app.set('views', './views');
app.set('view engine', 'ejs'); //=========================================================

app.use(_express["default"]["static"]('./views'));
app.use(_express["default"]["static"]('./css'));
app.use(_express["default"]["static"]('./src')); //=========================================================

app.listen(PORT, function () {
  console.log("Escuchando en el puerto ".concat(PORT));
});
app.get('/', function (req, res) {
  res.render('home');
}); //=========================================================

app.get('/nuevoUsuario', function (req, res) {
  //res.send("Esta como loquita")
  res.render('nuevoUsuario');
});
app.post('/nuevoUsuario', function _callee(req, res) {
  var nombre, apellido, email;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nombre = req.body.nombre;
          apellido = req.body.apellido;
          email = req.body.email;
          _context.next = 5;
          return regeneratorRuntime.awrap(prisma.usuario.create({
            data: {
              nombre: nombre,
              apellido: apellido,
              email: email
            }
          }));

        case 5:
          res.redirect('/usuarios');

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get('/usuarios', function _callee2(req, res) {
  var usuarios;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(prisma.usuario.findMany());

        case 2:
          usuarios = _context2.sent;
          res.render('usuarios', {
            usuarios: usuarios
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //=========================================================

app.get('/nuevoProducto', function (req, res) {
  res.render('nuevoProducto');
});
app.post('/nuevoProducto', function _callee3(req, res) {
  var categoria, marca, descripcion, precio, stock;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          categoria = req.body.categoria;
          marca = req.body.marca;
          descripcion = req.body.descripcion;
          precio = req.body.precio;
          stock = req.body.stock;
          categoria = parseInt(categoria);
          precio = parseFloat(precio);
          stock = parseInt(stock);
          _context3.next = 10;
          return regeneratorRuntime.awrap(prisma.producto.create({
            data: {
              id_categoria: categoria,
              marca: marca,
              descripcion: descripcion,
              precio: precio,
              stock: stock
            }
          }));

        case 10:
          res.redirect('/productos');

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.get('/productos', function _callee4(req, res) {
  var productos;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(prisma.producto.findMany());

        case 2:
          productos = _context4.sent;
          res.render('productos', {
            productos: productos
          });

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}); //==========================================================

app.get('/nuevaCategoria', function (req, res) {
  res.render('nuevaCategoria');
});
app.post('/nuevaCategoria', function _callee5(req, res) {
  var categoria;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          categoria = req.body.categoria;
          _context5.next = 3;
          return regeneratorRuntime.awrap(prisma.categoria.create({
            data: {
              categoria: categoria
            }
          }));

        case 3:
          res.redirect('/nuevaCategoria');

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
app.get('/categorias', function _callee6(req, res) {
  var categorias;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(prisma.categoria.findMany());

        case 2:
          categorias = _context6.sent;
          res.render('categorias', {
            categorias: categorias
          });

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
});