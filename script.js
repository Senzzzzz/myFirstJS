let myLeads = []
const inputEl = document.getElementById("input-el")
const saveInputBtn = document.getElementById("input-btn")
const list = document.getElementById('ul-el')
const saveTabBtn = document.getElementById('tab-btn')
const delAllBtn = document.getElementById('del-btn')


const storedValue = JSON.parse(localStorage.getItem('myLeads'))

if (storedValue) {
  myLeads = storedValue
  render(myLeads)
}
// Event Listeners
saveInputBtn.addEventListener("click", ()  => {
  myLeads.push(inputEl.value)
  localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
  render(myLeads) 
})

saveTabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    render(myLeads)
});

})

delAllBtn.addEventListener("dblclick", () => {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

function render(array) {
  // list.innerHTML = myLeads.map((lead) => `<li>${lead}</li>`).join("")

  // list.innerHTML = ""
  // for (i = 0; i < myLeads.length; i++) {
  //     const li =  document.createElement('li')
  //     li.innerHTML = myLeads[i]
  //     list.appendChild(li)
  //   }
  let listItems = ""

  for (let i = 0; i < array.length; i++) {
    listItems += `
    <li>
        <a target='_blank' href="">
          ${array[i]}
        </a>
    </li>`
  }
  
  list.innerHTML = listItems
}


