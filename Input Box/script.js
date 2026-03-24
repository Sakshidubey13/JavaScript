const input_name = document.querySelector("#input-name");
const btn_find = document.querySelector("#btn-find");
const result = document.querySelector("#result");//papragraph display

// writ, click , fetch , display 

btn_find.addEventListener("click",()=>{
   const value =  input_name.value;

   alert(value);

    result.textContent = value;  
})