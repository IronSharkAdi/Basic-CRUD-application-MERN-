import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRouter from './routes/posts.js'
const app = express()

// app set up
app.use(bodyParser.json({limit : "10mb" , extended : true }))
app.use(bodyParser.urlencoded({limit : "10mb" , extended : true }))
app.use(cors())


//routes
app.use("/posts" , postRouter)


//mongobd setup 
const CONNECTION_URL = "mongodb+srv://mernproject:iamacoder2018mern@cluster0.xd93n.mongodb.net/<dbname>?retryWrites=true&w=majority"
const PORT =   process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL , {useNewUrlParser : true  , useUnifiedTopology : true})
    .then(() => app.listen(PORT , () => console.log(`server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify' ,    false);

