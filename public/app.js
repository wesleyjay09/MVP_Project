
const container = document.querySelector("#container")
const input = document.getElementById("input");
const submit = document.querySelector("#submit")
let userInput;
const button = document.getElementById("button")
const deleteBtn = document.getElementById("delete")


const get = async () => {
    fetch('https://quiet-basin-82276.herokuapp.com/api/todo')
    .then(async(result)=> {
        let text = await result.text();
        
        container.innerHTML = text;
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
    fetch('https://quiet-basin-82276.herokuapp.com/api/todo',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'task': `${userInput}`})
    })
}


 


submit.addEventListener("click", post)
input.addEventListener("input", (e) => {userInput = e.target.value})
button.addEventListener("click", get)
deleteBtn.addEventListener("click", deleteTask)
