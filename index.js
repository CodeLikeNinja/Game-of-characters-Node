var users = require ('./users');
var app = require ('express')();

var bodyParser = require ('body-parser');

var port = process.env.PORT || 8000;

// Parse application / json
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({
    extended: true
}));

var users = require ('./users');

app.get ('/', function (req, res) {
    res.send (' <h1> Welcome to Game of thrones Node.js API </ h1> ');
});

app.get ('/user', function (req, res) {
    res.json (users.findAll ());
});

app.get ('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json (users.findById (id));
});

app.post ('/new_user', function (req, res) {
    var json = req.body;
    res.send ('Added new user : ' + json.name );
});

app.listen (port, function () {
    console.log ('Starting Node.js on port ' + port);
});