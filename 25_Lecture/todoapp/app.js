require("dotenv").config();
const express=require("express");
const connect=require('./config/db.js');
const todos=require('./model/todo.js');
const todoroutes=require('./routes/todoroutes.js');
const app=express();
connect();
app.use(express.json());
// iss line se hi hamara frontend dikhayega
app.use(express.static("public")); // issi line se humme main file ko index.html banana padhta hai 
app.use('/todos',todoroutes);
app.listen(5000);