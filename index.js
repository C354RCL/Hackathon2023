//dependencias
const morgan = require('morgan');
const express = require('express');
const app = express();

//rutas
const user = require('./routes/user.js')

//middleware 
const notFound = require('./middleware/notFound.js');
const index = require('./middleware/index.js');
const cors = require('./middleware/cors.js');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', index);

app.use("/user", user);
// app.use(auth);
app.use(notFound);

app.listen(process.env.PORT || 1000, () => {
    console.log('Server is runing...');
});