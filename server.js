require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./utils/db');
const mondayRoutes = require('./routes/monday');

const app = express();

app.use('/monday', mondayRoutes);

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST ,GET ,OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization ,Cache-Control, multipart/form-data , application/json ,text/plain, text/html');
    if (req.method == 'OPTIONS') {
      return res.status(200);
    }
  next();
});

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, console.log(`started server on port ${ PORT }`));

const PORT = process.env.PORT || 8080;
// sequelize.sync({ force: true })
// sequelize.sync({ alter: true })
sequelize.sync({ alter: false })
.then(() => { 
  app.listen(PORT, console.log(`started server on port ${ PORT }`));
  console.log('synced to general integration')
}).catch(err => console.log(err))