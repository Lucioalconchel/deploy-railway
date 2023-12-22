"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _client = require("@prisma/client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var prisma = new _client.PrismaClient();
var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
app.use(_bodyParser["default"].urlencoded({
  "extends": true
}));
app.use(_bodyParser["default"].json());
app.listen(PORT, function () {
  console.log("Escuchando en el puerto ".concat(PORT));
});
app.get('/', function (req, res) {
  res.send("hola usuario");
});
app.get('/nuevo', function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newUser();
          res.redirect('/');

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get('/usuario', function _callee2(req, res) {
  var usuarios;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(prisma.usuario.findMany());

        case 2:
          usuarios = _context2.sent;
          res.json(usuarios);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});

function newUser() {
  var user;
  return regeneratorRuntime.async(function newUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(prisma.usuario.create({
            data: {
              nombre: "lucio"
            }
          }));

        case 2:
          user = _context3.sent;
          return _context3.abrupt("return", user);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}