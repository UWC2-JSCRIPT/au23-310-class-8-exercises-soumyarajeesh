let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

myPromise
  .then(function() {
    console.log('success');
  })
  .catch(function() {
    console.log('fail');
  })
  .finally(function() {
    console.log('complete');
  });
  