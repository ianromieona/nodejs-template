const express = require('express');
const app = express();
const path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/resources/views/index.html'));
});

app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))