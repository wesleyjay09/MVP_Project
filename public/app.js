
const container = document.querySelector("#container")
const input = document.querySelector("#input").value;
const userInput = input;
const axios = require("./server.js")
const get = async ()=>{
    fetch('https://quiet-basin-82276.herokuapp.com/api/task')
    .then(async(result)=> {
        let text = await result.text();
        
        container.innerHTML = text;
        
        
    })
}
// let result = { userInput}
// submit.addEventListener("click",  async (url = `https://quiet-basin-82276.herokuapp.com/api/task/${userInput}`, result )=>{
//    await fetch(url, {
//         method: 'POST' ,
//         headers:{'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(result)
//        })
       
//         .then(async(result)=> {
//             console.log(result)
//         let text = await result.text();
//         container.innerHTML = text;
//         })
// })




async function makeGetRequest() {

    let payload = { userInput };

    let res = await axios.post('http://httpbin.org/post', payload);

    let data = res.data;
    console.log(data);
}

submit.addEventListener("click",makeGetRequest())
       

get()
