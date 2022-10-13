class Observable {
  constructor(functionThatTakesObserver){
    this._functionThatTakesObserver = functionThatTakesObserver;
  }

  subscribe(observer) {
    return this._functionThatTakesObserver(observer)
  }
}

let myObservable = new Observable(observer => {
let i = 0;
const interval = setInterval(() => {
  observer.next(`Got data ${i++}!`)
//     observer.complete()
}, 3000)
return { cancleSubsription: () => clearInterval(interval) }
}
)

let myObserver = {
next(data) {
  console.log(data)
},
error(e) {
  console.log(e)
},
complete() {
  console.log("request complete")
}
}

const subsription =  myObservable.subscribe(myObserver)
// (1 second) got data!
// (1 second) request complete