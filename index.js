//dependencias
const morgan = require('morgan');
const express = require('express');
const app = express();

//rutas
const signin = require('./routes/signin');
const login = require('./routes/login');

//middleware 
const notFound = require('./middleware/notFound.js');
const index = require('./middleware/index.js');
const cors = require('./middleware/cors')

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', index);

app.use("/signin", signin);
app.use("/login", login);
app.use(notFound);

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is runing in port 3000...');
});