const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes');
const employeeRoutes = require('./routes/employeeRoutes')

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
  }));

app.use("/api", routes);
app.use("/api/employ", employeeRoutes);

const url = 'mongodb+srv://dhsipa1997:wsAout63bCA4Zg3t@panwar.nnwioxb.mongodb.net/Panwar?retryWrites=true&w=majority';

mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(()=>{
    console.log("connect to database");
    app.listen(5000, ()=>{
        console.log('app is listening on port 5000')
    })
});



