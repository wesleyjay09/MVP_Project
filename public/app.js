
const container = document.querySelector("#container")
const input = document.querySelector("#input").value;
const submit = document.querySelector("#submit")
console.log(input)
const get = async ()=>{
    fetch('https://quiet-basin-82276.herokuapp.com/api/task')
    .then(async(result)=> {
        let text = await result.text();
        
        container.innerHTML = text;
        
        
    })
}
const post = () => {
    axios.post(`/api/task`, {
   task: `${input}`
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


submit.addEventListener("click", post())


get()
