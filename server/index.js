const express = require('express');
const app = express();
const Review = require('../database/schema.js');
const port = 5000;
const cors = require('cors');
const helpers = require('./helpers.js');

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.use(express.static('./client/dist'));
app.use(express.static('./images'));
app.use(cors());

app.get('/reviews/:houseId', function(req, res) {
  const query = req.query;
  const params = req.params;
  if (query.search !== undefined) {
    //if query params includes search -- add search to the query
    params['comment'] = { "$regex": query.search, "$options": "i" }
  }
  Review.find(params, null, {skip: parseInt(query.offset), limit: parseInt(query.limit)}, function(err, results) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});

app.get('/ratings/:houseId', function(req, res) {
  const params = req.params;
  Review.find(params, function(err, results) {
    if (err) {
      res.status(400).send(err);
    } else {
      const averages = helpers.getAverages(results);
      res.status(200).send(averages);
    }
  })
});

app.get('/totalReviews/:houseId', function(req, res) {
  const query = req.query;
  const params = req.params;
  if (query.search !== undefined) {
    //if query params includes search -- add search to the query
    params['comment'] = { "$regex": query.search, "$options": "i" }
  }
  Review.countDocuments(params, function(err, results) {
    const total = results + '';
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(total);
    }
  })
});


module.exports = app;