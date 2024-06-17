const inputbox = document.getElementById("box")

const listConatiner = document.getElementById("list-container")
var task = 0


function AddTask(){
   if( inputbox.value === ''){
     alert("you must write something")
   }
    else{
    let li = document.createElement("li")
     li.innerHTML = inputbox.value
     listConatiner.appendChild(li)

     let span = document.createElement("span")
     span.innerHTML = "❌"
     li.appendChild(span)
   }
   inputbox.value = ''
   saveData()
}

listConatiner.addEventListener("click" , function(e){
     if(e.target.tagName === "LI"){
         e.target.classList.toggle("checked")
         saveData()
     }
     else if(e.target.tagName === "SPAN" ){
            e.target.parentElement.remove()

            saveData()
     }

}, false)



function saveData(){
    localStorage.setItem("data" , listConatiner.innerHTML)

}

function showlist(){
    listConatiner.innerHTML = localStorage.getItem("data")
}
showlist()