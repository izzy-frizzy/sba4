let taskList = [];

let taskLabel = document.getElementById("task");
let categoryInput = document.getElementById("categoryInput");
let DeadLineStatus = document.getElementById("DeadLineStatus");
let taskStatus = document.getElementById("status");

let addTaskButton = document.getElementById("addTaskButton");
let taskL = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  let tasks = {
    task: taskLabel.value,
    category: categoryInput.value,
    deadLine: DeadLineStatus.value,
    status: taskStatus.value,
  };

  taskList.push(tasks);
  showTasks();
  checkOverdueTasks();
  
  function checkOverdueTasks() {
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  taskList.forEach(function (task) {
    let deadline = new Date(task.deadLine);
    deadline.setHours(0, 0, 0, 0);

    // Don't mark completed tasks as overdue
    if (task.status !== "Completed" && deadline < today) {
      task.status = "Overdue";
    }
  })}
  
});

function showTasks() {
  taskL.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    let taskItem = document.createElement("li");
    // console.log(taskList[i]);
    taskItem.innerText = `${taskList[i].task} | ${taskList[i].category} | ${taskList[i].deadLine} | ${taskList[i].status}`;

    taskL.appendChild(taskItem);
  }
}

function filterItem(searchTerm) {
  let terms = [];
  for (i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].includes(searchTerm)) {
      terms.push(shoppingCart[i]);
    }
  }
  return terms;
}