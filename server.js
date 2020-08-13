const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const app=express();

//Body parser middleware
app.use(bodyParser.json());