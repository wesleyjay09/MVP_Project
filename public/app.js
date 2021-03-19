
const listContainer = document.getElementById("listContainer")
const input = document.getElementById("input");
const submit = document.querySelector("#submit")
const button = document.getElementById("button")
const update = document.getElementById("update")
const deleteBtn = document.getElementById("delete")
const ul = document.getElementById("ul")
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
            let li = document.createElement("li")
            let task = document.createElement("label")
            task.setAttribute("id", "task")
            let check = document.createElement("input")
            check.setAttribute("type", "checkbox");
            check.setAttribute("id",`${text[i].id}`)
            check.setAttribute("class","input")
            let paragraph = document.createElement("p")
            let span = document.createElement("span")
            check.addEventListener("click", (e) =>{
                console.log(e.target.id)
                deleteInput = e.target.id
                deleteTask()
                })
       
            paragraph.innerHTML = text[i].task
             
            ul.appendChild(li).appendChild(task).appendChil(check).appendChild(paragraph).appendChild(span)
            
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




 

submit.addEventListener("click", put)
submit.addEventListener("click", post)
submit.addEventListener("click", get)
input.addEventListener("input", (e) => {userInput = e.target.value})
button.addEventListener("click", get)
deleteBtn.addEventListener("click", deleteTask)
deleteBtn.addEventListener("click", get)
