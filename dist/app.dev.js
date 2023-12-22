"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
/*
app.post('/inicio', (req,res)=>{
    const {username} = req.body;
    res.send({msg: `Bienvenido ${username}`});
})
*/

app.get('/usuario', function _callee(req, res) {
  var usuario;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Prisma.usuario.create({
            data: {
              nombre: "Lucio"
            }
          }));

        case 2:
          usuario = _context.sent;
          res.json(usuario);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});