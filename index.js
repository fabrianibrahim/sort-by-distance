var get = require('lodash.get');

function distanceBetweenPoints (p1, p2, name) {
  return Math.abs(Math.sqrt(getDistanceY(p1, p2, name) + getDistanceX(p1, p2, name)));
}

function getDistanceY (p1, p2, name) {
  return (get(p1, name.y) - get(p2, name.y)) * (get(p1, name.y) - get(p2, name.y));
}

function getDistanceX (p1, p2, name) {
  return (get(p1, name.x) - get(p2, name.x)) * (get(p1, name.x) - get(p2, name.x));
}

function sortDistance (origin, points, opts) {
  if (!origin || !points || !Array.isArray(points)) {
    console.warn('An origin and array points must be provided');
    return null;
  }

  var names = {
    y: opts && opts.yName ? opts.yName : 'y',
    x: opts && opts.xName ? opts.xName : 'x'
  };

  var newPoints = points.slice();

  newPoints.sort(function (a, b) {
    a.distance = distanceBetweenPoints(origin, a, names)
    b.distance = distanceBetweenPoints(origin, b, names)

    return a.distance - b.distance;
  })

  return newPoints;
}

module.exports = sortDistance;
