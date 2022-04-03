//const express = require('express'); //require is same as import
import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";

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