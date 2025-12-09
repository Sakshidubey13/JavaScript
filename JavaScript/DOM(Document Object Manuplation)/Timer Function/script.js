// Synchronous JavaScript:
// Execution Flow: Tasks are executed sequentially, one after the other.Each operation must complete before the next one can begin.
// Blocking Behavior: If a synchronous operation is time - consuming(e.g., reading a large file, making a complex calculation), it will block the main thread, causing the application to become unresponsive until the operation finishes.
//     Simplicity: Synchronous code is generally easier to understand and debug due to its predictable, linear execution order


// When setTimeout is called, it registers the provided function and the delay with the browser's (or Node.js's) event loop.
// it execute after specified time .

//  setTimeout(()=>{ 
//     console.log("Hello world ")
//   },10000);

// it execute on every specified interval/time.
// setInterval(()=>{
//     console.log("Hello word");
// },2000);

const text = document.getElementById("text");


setInterval(() => {
     const  date = new Date();
        text.textContent =
        date.getHours() + " : "
        + date.getMinutes() + " : "
       + date.getSeconds();
}, 1000);





