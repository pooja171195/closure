const throttle = (fn, delay) => {
    let lastCalled = 0;
    return (...args) => {
      let now = new Date().getTime();
      if(now - lastCalled < delay) {
        return;
      }
      lastCalled = now;
      return fn(...args);
    }
  }
  
  const printMessage = () => {
    //console.log("");
    let ele = document.getElementById('container');
    ele.innerHTML = ele.innerHTML+'You have clicked a button';

};
  
  const sayHello = throttle(printMessage,2000);