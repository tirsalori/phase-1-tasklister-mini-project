document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    handleTask(document.getElementById('new-task-description').value)
    form.reset()
  })
});

function handleTask(task){
  let btn = document.createElement("button")
  btn.addEventListener('click', handleDelete)
  btn.textContent = "x"
  console.log(task)
  document.getElementById("tasks").textContent = `${task} `
  document.getElementById("tasks").appendChild(btn)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

