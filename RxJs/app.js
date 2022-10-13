
const observable = new Rx.Observable((subscriber) => {
  subscriber.next(Math.floor(Math.random() * 100));
});

observable.subscribe({
  next(value) {
    console.log("Subscriber 1: Got value " + value);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    console.log("done");
  },
});

observable.subscribe(value =>  console.log("Subscriber 2: Got value " + value));


// var subject = new Rx.Subject();
// subject.subscribe({
// 	next: function(value) {
//   	console.log(value);
//   },
//   error: function(error) {
//   	console.log(error);
//   },
//   complete: function() {
//   	console.log('Complete');
//   }
// });

// subject.subscribe({
// 	next: function(value) {
//   	console.log(value);
//   }
// });

// subject.next('A new data piece');
// subject.complete();
// subject.next('New value');
