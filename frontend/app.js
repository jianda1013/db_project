var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use(logger('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);
app.listen(process.env.PORT_PAGE, () => {
    console.log(`server listening on ${process.env.PORT_PAGE}`)
})