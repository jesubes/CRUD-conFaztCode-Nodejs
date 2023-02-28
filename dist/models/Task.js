"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
/* DEFINICION de esquema */

var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    require: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false // es par que en mongo no aparezca _V 
});
var _default = (0, _mongoose.model)('Task', taskSchema);
exports["default"] = _default;