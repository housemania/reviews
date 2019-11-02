var request = require("request"),
    chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    app = require(".././server/index.js'),
    base_url = "http://localhost:5000/",
    ratingsUrl = "http://localhost:5000/ratings/6",
    reviewUrl = "http://localhost:5000/reviews/76"
    reviewUrlLimit = "http://localhost:5000/reviews/76?offset=0&limit=10",
    searchUrl = "http://localhost:5000/reviews/76?search="




describe("GET /", function() {
  it("returns status code 404", function(done) {
    request.get(base_url, function(error, response, body) {
      assert.equal(404, response.statusCode);
      done();
    });
  });

});
describe("GET /ratings/6", function() {
  it("returns status code 200", function(done) {

    request.get(ratingsUrl, function(error, response, body) {
      assert.equal(200, response.statusCode);
      done();
    });
  });
  it("has an accuracy rating", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.isAtMost(parseInt(parsed.accuracy), 5);
      assert.isAtLeast(parseInt(parsed.accuracy), 1);
      done();
    });
  });
  it("has a communication rating", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.isAtMost(parseInt(parsed.communication), 5);
      assert.isAtLeast(parseInt(parsed.communication), 1);
      done();
    });
  });
  it("has a location rating", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.isAtMost(parseInt(parsed.location), 5);
      assert.isAtLeast(parseInt(parsed.location), 1);

      done();
    });
  });
  it("has a checkIn rating", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.isAtMost(parseInt(parsed.checkIn), 5);
      assert.isAtLeast(parseInt(parsed.checkIn), 1);
      done();
    });
  });
  it("has a valueof ratings", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.isAtMost(parseInt(parsed.value), 5);
      assert.isAtLeast(parseInt(parsed.value), 1);
      done();
    });
  });
  it("has a cleanliness rating", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.isAtMost(parseInt(parsed.cleanliness), 5);
      assert.isAtLeast(parseInt(parsed.cleanliness), 1);
      done();
    });
  });
  it("has a overall rating", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.isAtMost(parseInt(parsed.overall), 5);
      assert.isAtLeast(parseInt(parsed.overall), 1);
      done();
    });
  });
});

describe("GET /reviews/", function() {
  it("returns status code 200", function(done) {

    request.get(reviewUrl, function(error, response, body) {
      assert.equal(200, response.statusCode);
      done();
    });
  });
  let firstTen;
  it("has a review", function(done) {
    request.get(reviewUrl, function(error, response, body) {
      const parsed = JSON.parse(body);
      firstTen = parsed.slice(0, 10)
      assert.isAtLeast(parsed.length, 1);
      done();
    });
  });
  let words;
  let secondWord;
  it("has a working limiter", function(done) {
    request.get(reviewUrlLimit, function(error, response, body) {
      words = firstTen[0].comment.split(' ');
      secondWord = words[1];
      const parsed = JSON.parse(body);
      expect(firstTen).to.eql(parsed);
      done();
    });
  });
  it("has a working search functionality", function(done) {
    const totalSearchUrl = searchUrl + secondWord;
    request.get(totalSearchUrl, function(error, response, body) {
      const parsed = JSON.parse(body);
      assert.isAtLeast(parsed.length, 1);
      done();
    });
  });

});
