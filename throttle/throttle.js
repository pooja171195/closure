const throttler = (fn, delay) => {
    let lastCalled = 0;
   
    return (...args) => {
      let now = new Date().getTime();
      if(now - lastCalled < delay) {
          count++
        return ;
      }
      lastCalled = now;
      return fn(...args);
    }
  }



  const printMessage = () => {
    //console.log("");
    let ele = document.getElementById('container');
 ele.innerHTML = ele.innerHTML+'You have clicked a button';
 ele.style.color="red";


};
  
  const sayHello = throttler(printMessage,2000);


  function throttle( fn, wait ){
    let lastCall = 0;
      return function(){
      if( Date.now() - lastCall > wait  ){
        lastCall = Date.now()
        fn()
      }
    }
  }
  
  var counter = 0
  
  var count = () => document.querySelector("#count").textContent = ++counter
  
  window.addEventListener('scroll', throttle( count, 1000 ) )