const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-List")

// const listContainer = document.getElementById("listContainer")
// const input = document.getElementById("input");
// const submit = document.querySelector("#submit")
// const button = document.getElementById("button")
// const update = document.getElementById("update")
// const deleteBtn = document.getElementById("delete")
// const empty = document.getElementById("empty")


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
            const todoDiv = document.createElement('div')
            const newTodo = document.createElement('li')
            newTodo.innerHTML = text [i].task
            todoDiv.appendChild(newTodo);
            const completedButton = document.createElement('button');
            completedButton.innerHTML = '<i class="fas fa-check"></i>';
            completedButton.classList.add("completed-btn")
            todoDiv.appendChild(completedButton)
            const trashButton = document.createElement('button');
            trashButton.innerHTML = '<i class="fas fa-trash"></i>';
            trashButton.classList.add("trash-btn")
            todoDiv.appendChild(trashButton)
            todoList.appendChild(todoDiv)
          
            trashButton.addEventListener("click", (e) =>{
                console.log(e.target.id)
                deleteInput = e.target.id
                deleteTask()
                })
        
        
        }
        todoInput.value = "";
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




todoButton.addEventListener('click', get)
empty.addEventListener("click", get)
//submit.addEventListener("click", put)
submit.addEventListener("click", post)
submit.addEventListener("click", get)
todoInput.addEventListener("input", (e) => {userInput = e.target.value})
button.addEventListener("click", get)
//deleteBtn.addEventListener("click", deleteTask)
//deleteBtn.addEventListener("click", get)
