let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

let customersCopy = customers.map((element) => {
  return element
})

const listAll = document.querySelector("#listAll")
const button = document.getElementById("createBtn")

const createList = (arr) => {
  arr.forEach((elem) => {
    const newRow = document.createElement("div")
    const destroy = document.createElement("button")
    newRow.classList.add("row")
    destroy.classList.add("destroy")
    newRow.innerHTML = `${elem.name} (${elem.email})`
    listAll.appendChild(newRow)
    listAll.appendChild(destroy)
  })
}

const addToList = () => {
  const name = document.querySelector("#nameLabel").value
  const email = document.getElementById("nameEmail").value
  const isVIP = document.getElementById("isVIP").checked
  const newRow = document.createElement("div")
  const destroy = document.createElement("button")


  customersCopy.push({name: name, email: email, isVIP: isVIP})

  newRow.classList.add("row")
  destroy.classList.add("destroy")
  newRow.innerHTML = `${name} (${email})`
  listAll.appendChild(newRow)
  listAll.appendChild(destroy)
}

button.addEventListener("click", (ev) => {
  ev.preventDefault()
  addToList()
  console.log('test')
})

createList(customers)
