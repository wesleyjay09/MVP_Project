

const listContainer = document.getElementById("listContainer")
const input = document.getElementById("input");
const submit = document.querySelector("#submit")
const button = document.getElementById("button")
const update = document.getElementById("update")
const deleteBtn = document.getElementById("delete")
const empty = document.getElementById("empty")
const todoList = document.querySelector(".todo-list")


let userInput;
let deleteInput;

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
const get = () => {
    fetch('https://quiet-basin-82276.herokuapp.com/api/todo')
    .then(async(result)=> {
        // while (listContainer.firstChild) {
        //     listContainer.removeChild(listContainer.firstChild)};
        let text = await result.json();
        for(let i = 0; i < text.length; i++) {
            let todo = document.createElement("div")
            todo.setAttribute("class","todo")
            let check = document.createElement("button")
            check.setAttribute("type", "submit");
            check.setAttribute("id",`${text[i].id}`)
            check.setAttribute("class","input")
            check.addEventListener("click", (e) =>{
                todo.appendChild(check)
                console.log(e.target.id)
                deleteInput = e.target.id
                deleteTask()
                })
                todoList.appendChild(todo)
                
        
        
        }
      
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





empty.addEventListener("click", get)
//submit.addEventListener("click", put)
submit.addEventListener("click", post)
submit.addEventListener("click", get)
input.addEventListener("input", (e) => {userInput = e.target.value})
button.addEventListener("click", get)
//deleteBtn.addEventListener("click", deleteTask)
//deleteBtn.addEventListener("click", get)
