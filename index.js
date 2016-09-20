function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var games = ['board','chess','cards'];
  games.forEach(callback);
  return games;
}

function doToArray(array,callback) {
  array.forEach(callback);  
}
