"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/add', (req, res, next) => {
    const newtodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newtodo);
    res.status(201).json({ message: 'updated', todos: newtodo });
});
router.put('/update/:id', (req, res, next) => {
    const id = req.params.id;
    const todoindex = todos.findIndex(todoitem => {
        todoitem.id === id;
    });
    if (todoindex >= 0) {
        todos[todoindex] = { id: todos[todoindex].id, text: req.body.text };
        return res.status(200).json({ message: 'updated', todos: todos });
    }
    res.status(205).json({ message: 'unable to find data' });
});
router.delete('/remove/:id', (req, res, next) => {
    todos = todos.filter(todoitem => todoitem.id !== req.params.id);
    res.status(207).json({ message: 'deleted', todos: todos });
});
exports.default = router;
