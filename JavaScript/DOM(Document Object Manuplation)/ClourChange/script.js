// const body = document.getElementsByTagName("body");
const button = document.getElementById("btn");
 
// R, G , B  = 255 * 255 * 255 = 16,581,375

const randomColorGenerator = ()=>{

    const random = Math.floor(Math.random() * 16581375);
    const color =  random.toString(16);
    // alert(color);
    button.style.color = "#" + color; 
    button.textContent = "#"+ color;
   document.body.style.backgroundColor = "#" + color;

}

button.addEventListener("click",randomColorGenerator)
