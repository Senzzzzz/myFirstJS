let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const list = document.getElementById('ul-el')


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  render()
  inputEl.value = ""
})

function render(value) {
  // list.innerHTML = myLeads.map((lead) => `<li>${lead}</li>`).join("")

  // list.innerHTML = ""
  // for (i = 0; i < myLeads.length; i++) {
  //     const li =  document.createElement('li')
  //     li.innerHTML = myLeads[i]
  //     list.appendChild(li)
  //   }

  listItems = `
    <li>
        <a target='_blank' href="">
          ${inputEl.value}
        </a>
    </li>`
  list.innerHTML += listItems
 
}



const string = Number("1234")
console.log(typeof(string))