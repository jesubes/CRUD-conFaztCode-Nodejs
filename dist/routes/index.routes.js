"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasksController = require("../controllers/tasks.controller.js");
var router = (0, _express.Router)();
router.get('/', _tasksController.renderTasks);
router.post('/tasks/add', _tasksController.createTask);
router.get('/task/:id/edit', _tasksController.renderTaskEdit);
router.post('/task/:id/edit', _tasksController.editTask);
router.get('/task/:id/delete', _tasksController.deleteTask);
router.get('/task/:id/toggleDone', _tasksController.taskToggleDone);
var _default = router;
exports["default"] = _default;