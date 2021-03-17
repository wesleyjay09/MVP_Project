
const container = document.querySelector("#container")
const input = document.querySelector("#input");
const submit = document.querySelector("#submit")
const userInput = input.value



const get = async () => {
    fetch('https://quiet-basin-82276.herokuapp.com/api/task')
    .then(async(result)=> {
        let text = await result.text();
        
        container.innerHTML = text;
    })
}

const post = () => {
    fetch('https://quiet-basin-82276.herokuapp.com/api/task', {
        method: 'POST',
        body:JSON.stringify({'task':`${userInput}`}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .catch(err => err.message)


}





submit.addEventListener("click", post())
get()
