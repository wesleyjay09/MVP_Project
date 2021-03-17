
const container = document.querySelector("#container")
const input = document.querySelector("#input");
const submit = document.querySelector("#submit")



const get = async ()=>{
    fetch('https://quiet-basin-82276.herokuapp.com/api/task')
    .then(async(result)=> {
        let text = await result.text();
        
        container.innerHTML = text;
    })
}






get()
