const db = require('./index.js');
const Review = require('./schema.js');
const faker = require('faker');
//TODO: drop database here

Review.remove({}, function(err) {
  console.log('collection removed')
});
const randomNumber = function() {
  return Math.floor(Math.random() * Math.floor(5));
}
const randomNumberReviews = function() {
  return Math.floor(Math.random() * Math.floor(75));
}
const dataArray = [];
for (var i = 0; i < 100; i++) {
  var randomReviewLength = randomNumberReviews();
  for (var j = 0; j < randomReviewLength; j++) {
    const testData = {
      houseId: i,
      userId: faker.random.number(),
      userName: faker.name.firstName(),
      userImage: faker.image.imageUrl(),
      comment: faker.lorem.paragraph(),
      dateCreated: faker.date.past(),
      starRatings: {
        accuracy: randomNumber(),
        communication: randomNumber(),
        location: randomNumber(),
        checkIn: randomNumber(),
        value: randomNumber(),
        cleanliness: randomNumber()
      }
    };
    if (j % 3 === 0) {
      testData.comment = faker.lorem.paragraphs();
    }
    if (j % randomNumber() === 0) {
      testData.response = {
        name: faker.name.findName(),
        image: faker.image.imageUrl(),
        comment: faker.lorem.paragraph(),
        date: faker.date.past()
      }
    }
    dataArray.push(testData);
  }
}



const seedData = function () {
  Review.create(dataArray)
    .then(() => {
      db.disconnect();
    })
    .catch((err) => {
      console.log(">>>>>>>>>> " + err);
    })
}
seedData();


