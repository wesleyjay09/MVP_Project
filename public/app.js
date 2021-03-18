
const listContainer = document.getElementById("listContainer")
const input = document.getElementById("input");
const submit = document.querySelector("#submit")
const button = document.getElementById("button")
const deleteBtn = document.getElementById("delete")
let check = document.createElement("input")
check.setAttribute("id" ,"checked")
check.setAttribute("type", "checkbox");
let userInput;





const get = () => {
    fetch('https://quiet-basin-82276.herokuapp.com/api/todo')
    .then(async(result)=> {
        while (listContainer.firstChild) {
            listContainer.removeChild(listContainer.firstChild)};
        let text = await result.json();
        for(let i = 0; i < text.length; i++) {
            let task = document.createElement("div")
            task.setAttribute("id", "task")
            let check = document.createElement("input")
            check.setAttribute("type", "checkbox");
       
            task.innerHTML = text[i].task
            task.appendChild(check); 
            listContainer.appendChild(task)
            
        }
        console.log(text[6].id)
        
        
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
    if(document.getElementById("checked").checked = true) {
        fetch('https://quiet-basin-82276.herokuapp.com/api/todo',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'id': `${userInput}`})
    })
}

}



 


submit.addEventListener("click", post)
submit.addEventListener("click", get)
input.addEventListener("input", (e) => {userInput = e.target.value})
button.addEventListener("click", get)
deleteBtn.addEventListener("click", deleteTask)
deleteBtn.addEventListener("click", get)
