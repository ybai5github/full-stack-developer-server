//const express = require('express'); //require is same as import
import * as tuitsDao from "./database/tuits-dao.js"
import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/webdev');
// const password = 951130;
// mongoose.connect(`mongodb+srv://ybai5:${password}@cluster0.na98s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

const app = express();
app.use(cors());
app.use(express.json());



helloController(app);
userController(app);
tuitController(app);
//app.get('/hello', (req, res) => {res.send('Hello World!')})
//app.get('/hello', (req, res) => {res.send('Life is good!')})
//app.get('/', (req, res)=>{res.send("Welcome to Fall Stack Development!")})
app.listen(process.env.PORT || 4000);