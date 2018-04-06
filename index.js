const express = require('express');
const app = express();

const objectives = require('./test/mock-data/objectives');
const practices = require('./test/mock-data/practices');

app.use('/', express.static('www'));

app.get('/ping', function(req, res) {
  res.send('pong');
});

app.get('/objectives', function(req, res) {
  res.send(objectives);
});

app.get('/practices', function(req, res) {
  var objectiveId = req.query.objectiveId;
  if (objectiveId) {
    res.send(_.filter(practices, {objectiveId: objectiveId}));
  } else {
    res.send(practices);
  }
});

app.listen(8080, '0.0.0.0', function() {
  console.log('listening on 8080');
});
