
const container = document.getElementById("container")
const input = document.getElementById("input");
const submit = document.querySelector("#submit")
let userInput;
const button = document.getElementById("button")
const deleteBtn = document.getElementById("delete")




const get = () => {
    fetch('https://quiet-basin-82276.herokuapp.com/api/todo')
    .then(async(result)=> {
        let text = await result.json();
        for(let i = 0; i < text.length; i++) {
            let checkBox = $(`<input type="checkbox>`)
            let label = $(`<label for="${checkBox}">${text[i].id} ${text[i].task}</label><br><br></br>`)
            label.append(checkBox).append(container)   
        }
        console.log(container)
        
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
          body: JSON.stringify({'id': `${userInput}`})
    })
}


 


submit.addEventListener("click", post)
input.addEventListener("input", (e) => {userInput = e.target.value})
button.addEventListener("click", get)
deleteBtn.addEventListener("click", deleteTask)
