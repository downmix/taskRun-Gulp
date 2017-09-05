var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3030);

app.get('/', function(req, res){
  res.send('hello gulpworld!');
});

app.listen(app.get('port'), function(){
    console.log('express start!! localhost:' + app.get('port'));
});