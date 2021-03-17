
const container = document.querySelector("#container")
const input = document.querySelector("#input");
const submit = document.querySelector("#submit")

console.log(input.value)

const get = async ()=>{
    fetch('https://quiet-basin-82276.herokuapp.com/api/task')
    .then(async(result)=> {
        let text = await result.text();
        
        container.innerHTML = text;
    })
}
const post = async () => {
  await fetch(`https://quiet-basin-82276.herokuapp.com/api/task/`,{
    method: 'POST',  
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    task: `${input.value}`,
  })
})
.then(function (data) {  
  console.log('Request success: ', data);  
})  
.catch(function (error) {  
  console.log('Request failure: ', error);  
});
}


submit.addEventListener("click", post)


get()
