

const listContainer = document.getElementById("listContainer")
const input = document.getElementById("input");
const submit = document.querySelector("#submit")
const button = document.getElementById("button")
const update = document.getElementById("update")
const deleteBtn = document.getElementById("delete")
const empty = document.getElementById("empty")
let check = document.createElement("input")
check.setAttribute("id" ,"checked")
check.setAttribute("type", "checkbox");
let userInput;
let deleteInput;

const get = () => {
    fetch('https://quiet-basin-82276.herokuapp.com/api/todo')
    .then(async(result)=> {
        while (listContainer.firstChild) {
            listContainer.removeChild(listContainer.firstChild)};
        let text = await result.json();
        for(let i = 0; i < text.length; i++) {
           let todo = document.createElement("div")
           todo.setAttribute("id", `task`)
           
           todo.setAttribute("class","todo")
           let check = document.createElement("input")
           check.setAttribute("type", "checkbox")
           check.setAttribute("class", "checkbox")
           check.setAttribute("id", `${text[i].id}`)
          
            todo.addEventListener("click", (e) =>{
                console.log(e.target.id)
                deleteInput = e.target.id
                deleteTask()
                })
        todo.innerHTML = text[i].task
        listContainer.appendChild(todo).appendChild(check)
        }
    })
}

const post = () => {
    fetch('https://quiet-basin-82276.herokuapp.com/api/todo', {
        method: 'POST',
        body:JSON.stringify({'task':`${userInput}`}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(async (result) => {
        let text = await result.text()
    })
}

const deleteTask = ()=> {
        fetch(`https://quiet-basin-82276.herokuapp.com/api/todo/${deleteInput}`,{
        method: 'DELETE'
        })
}

const put = () => {
    fetch(`https://quiet-basin-82276.herokuapp.com/api/todo/${userInput}`, {
        method: 'PUT', 
        headers: {
         'Content-type': 'application/json; charset=UTF-8'  
        },
        body: JSON.stringify({task:`${userInput}`}) 
       })

}

const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


 
empty.addEventListener("click", get)
//submit.addEventListener("click", put)
submit.addEventListener("click", post)
submit.addEventListener("click", get)
input.addEventListener("input", (e) => {userInput = e.target.value})
button.addEventListener("click", get)
//deleteBtn.addEventListener("click", deleteTask)
//deleteBtn.addEventListener("click", get)