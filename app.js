const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');
const path=require('path')
const cors =require('cors')
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use( require('./routes/signUp.routes')  )
app.use( require('./routes/signin.routes')  )
app.use( require('./routes/uploaded.routes')  )

//how to connect mongodb with nodejs ?
mongoose.connect('mongodb+srv://admin:admin@cluster0.sgh8mpl.mongodb.net/project1', // // your connection string
{ useNewUrlParser: true, useUnifiedTopology: true},)
.then(()=>console.log("Connected Successfully"))
.catch((err)=>{ console.log(err); }) ;

app.listen(port, () => console.log(`Example app listening at http://localhost:5000`))






