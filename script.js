let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

let customersCopy = customers.map((element) => {
  return element
})

const listAll = document.querySelector("#listAll")
const createBtn = document.getElementById("createBtn")
const name = document.querySelector("#nameLabel")
const email = document.getElementById("nameEmail")
const isVIP = document.getElementById("isVIP")
const newRow = document.createElement("div")
const destroyCreate = document.createElement("button")
const destroyBtn = document.querySelector(".destroy")
const errMsg = document.querySelector("#errorMsg")
// const addText = destroyBtn.createTe


const createList = (arr) => {
  arr.forEach((elem) => {
    const newRow = document.createElement("div")
    const destroyCreate = document.createElement("button")
    newRow.classList.add("row")
    destroyCreate.classList.add("destroy")
    destroyCreate.textContent = "destroy"
    newRow.innerHTML = `${elem.name} (${elem.email})`
    listAll.appendChild(newRow)
    listAll.appendChild(destroyCreate)
  })
}

const addToList = () => {
  let nameVal = name.value
  let emailVal = email.value
  let checked = isVIP.checked

  customersCopy.push({name: nameVal, email: emailVal, isVIP: checked})

  newRow.classList.add("row")
  destroyCreate.classList.add("destroy")
  destroyCreate.textContent = "destroy"
  newRow.innerHTML = `${nameVal} (${emailVal})`
  listAll.appendChild(newRow)
  listAll.appendChild(destroyCreate)
}


const validation = () => {
  if ((name.value != "" && email.value != "") && email.value.split("").includes("@")) {
    createBtn.disabled = false
  }
  else {
    createBtn.disabled = true
  }
}

createBtn.addEventListener("click", (ev) => {
  ev.preventDefault()
  addToList()
  console.log('test')
})

email.addEventListener("keyup", (ev) => {
  let emailVal = email.value.split("")
  if (!emailVal.includes('@')) {
    errMsg.innerHTML = "email must contain an @"
  }
  else if (emailVal.includes("@")) {
    errMsg.innerHTML = ""
  }

  validation()
})

name.addEventListener("oninput", validation())


createList(customers)
