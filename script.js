const mainContent = document.getElementById("show");
const subContent = document.getElementById("data");

let state = false;
mainContent.addEventListener("click", () =>{
    if(state == false){
        subContent.style.display = "block";
        state = true;
    }
    else{
        subContent.style.display = "none";
        state = false;
    }
})