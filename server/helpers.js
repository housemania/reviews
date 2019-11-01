const roundNearHalf = function(number) {
  return (Math.round(number * 2) / 2).toFixed(1);
};
const getAverages = function(data) {

  let accuracy = 0;
  let communication = 0;
  let location = 0;
  let checkIn = 0;
  let cleanliness = 0;
  let value = 0;
  let count = 0;
  for (var i = 0; i < data.length; i++) {
    accuracy += data[i].starRatings.accuracy;
    communication += data[i].starRatings.communication;
    location += data[i].starRatings.location;
    checkIn += data[i].starRatings.checkIn;
    value += data[i].starRatings.value;
    cleanliness += data[i].starRatings.cleanliness;
    count += 1;
  }
  const result = {
    accuracy: roundNearHalf(accuracy / count),
    communication: roundNearHalf(communication / count),
    location: roundNearHalf(location / count),
    checkIn: roundNearHalf(checkIn / count),
    value: roundNearHalf(value / count),
    cleanliness: roundNearHalf(cleanliness / count),
  }
  result.overall = roundNearHalf((accuracy + communication + location + checkIn + value + cleanliness) / (6 * count));
  result.numReviews = data.length;
  return result;
};

