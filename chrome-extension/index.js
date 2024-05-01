let myLeads = [];

const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const delBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  ulEl.innerHTML = " ";
  for (let i = 0; i < leads.length; i++) {
    let listItems = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = leads[i];
    a.href = leads[i];
    a.target = "_blank";
    listItems.appendChild(a);
    ulEl.appendChild(listItems);
  }
}

function saveLead() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
}

inputBtn.addEventListener("click", () => saveLead());

delBtn.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

const tabs = [{ url: "https://" }];

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
