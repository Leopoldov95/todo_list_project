//Global task counter
let totalTasks = 0;

//DOM selector
const userInput = document.querySelector("#user_input");
const displayDate = document.querySelector(".date_display");
const userTasks = document.querySelector(".task-items");
const listBody = document.querySelector(".list_body");
const newTodo = document.querySelector("#add_item");
const tasks = document.querySelector(".tasks");

//Displaying the current Date
displayDate.innerHTML = `<h1 class="date">${getDayName()}, <span>${date}${checkDate()}<span></h1>
<h3>${getMonthName()}</h3>
`;

//adding an item
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return;
    if (this.value.length >= 25) {
      return alert("ERR: Too many characters");
    }

    //add new item to list
    const newListItem = this.value;
    const newItem = document.createElement("li");
    newItem.innerHTML = `
    <div class='list-info'>
        <input type="checkbox" class="list_item"><span class="ml-1">${newListItem}</span><i class="fas fa-trash ml-1" value='click'></i>
    </div>
    <div>
        <span class="time_created">${returnTime()}</span>
    </div>`;
    listBody.appendChild(newItem);
    this.value = "";
    totalTasks++;
    updateTasks();
  }
});

//add item when pressing button icon
newTodo.addEventListener("click", function () {
  if (!userInput.value) return;
  if (userInput.value.length >= 25) {
    return alert("ERR: Too many characters");
  }

  //add new item to list
  const newListItem = userInput.value;
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <div class='list-info'>
        <input type="checkbox" class="list_item"><span class="ml-1">${newListItem}</span><i class="fas fa-trash ml-1" value='click'></i>
    </div>
    <div>
        <span class="time_created">${returnTime()}</span>
    </div>`;
  listBody.appendChild(newItem);
  userInput.value = "";
  totalTasks++;
  updateTasks();
});

//delete list item and update task count
listBody.addEventListener("click", function (event) {
  console.log(event.target.className);
  if (event.target.className.includes("fa-trash")) {
    event.target.parentNode.parentNode.remove();
    totalTasks--;
    updateTasks();
  }
});

//clearing all items
const clearAll = document.querySelector(".clear");
clearAll.addEventListener("click", () => {
  listBody.innerHTML = "";
  totalTasks = 0;
  updateTasks();
});

//updating the total amount of tasks
function updateTasks() {
  if (totalTasks === 1) {
    tasks.innerText = `${totalTasks} Task`;
  } else {
    tasks.innerText = `${totalTasks} Tasks`;
  }
}
