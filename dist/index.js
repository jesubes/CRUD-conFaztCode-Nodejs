"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
require("./database.js");
var _config = require("./config.js");
// aqui en index.js solo se desea poner condigo de arranque de la aplicacion.

_app["default"].listen(_config.PORT, function () {
  console.log('Server Arriba PORT: ', _config.PORT);
});