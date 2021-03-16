
const container = document.querySelector("#container")



const get = async ()=>{
    fetch('https://quiet-basin-82276.herokuapp.com/api/task')
    .then(async(result)=> {
        let text = await result.text();
        container.innerHTML = text.task;
    })
}

// submit.addEventListener("click",  async ()=>{
//     fetch('https://quiet-basin-82276.herokuapp.com/api/task', {
//         method: 'POST' 
//        })
//         .then(async(result)=> {
//         let text = await result.text();
//         container.innerHTML = text;
//         })
// })

get()
