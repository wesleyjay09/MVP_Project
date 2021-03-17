
const container = document.querySelector("#container")
const input = document.querySelector("#input").value;
const userInput = input;

const get = async ()=>{
    fetch('https://quiet-basin-82276.herokuapp.com/api/task')
    .then(async(result)=> {
        let text = await result.text();
        
        container.innerHTML = text;
        
        
    })
}

submit.addEventListener("click",  async (url = `https://quiet-basin-82276.herokuapp.com/api/task/${userInput}`, result )=>{
   await fetch(url, {
        method: 'POST' ,
        headers:{'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({test: 'working'})
       })
       
        .then(async(res)=> {
            return res.json()
      
        })
        .then(data => console.log(data))
})





get()
