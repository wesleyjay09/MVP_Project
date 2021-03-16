const btn = document.getElementById("button")
const container = document.querySelector(".container")
console.log(btn)
btn.addEventListener("click",  async ()=>{
    fetch('https://quiet-basin-82276.herokuapp.com/api/task')
    .then(async(result)=> {
        let text = await result.text();
        container.innerHTML = text;
    })
})
