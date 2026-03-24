//
//const buttons = document.getElementsByTagName("button");
//
//
//buttons[0].addEventListener("Click",()=>{
//    const str = Math.floor(Math.random()*16581375).toString(16).padStart(6, "0");;
//    document.body.style.backgroundColor ="#"+str;
//    buttons[0].textContent = str;
//});


   // const body = document.getElementsByTagName("body");
const button = document.getElementById("btn");
 
// R, G , B  = 255 * 255 * 255 = 16,581,375

const randomColorGenerator = ()=>{

    const random = Math.floor(Math.random() * 16581375).toString(16);
    const color =  random.toString(16);
    button.style.color = "#" + color; 
    button.textContent = "#"+ color;
   document.body.style.backgroundColor = "#" + color;

}

button.addEventListener("click",randomColorGenerator)