const btn = document.getElementById("button")
const container = document.querySelector(".container")
console.log(btn)


document.addEventListener("click",  async ()=>{
    fetch('https://quiet-basin-82276.herokuapp.com/api/task')
    .then(async(result)=> {
        let text = await result.text();
        container.innerHTML = text;
    })
})

submit.addEventListener("click",  async ()=>{
    fetch('https://quiet-basin-82276.herokuapp.com/api/task', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(async(result)=> {
        let text = await result.text();
        container.innerHTML = text;
        })
})
