let taskList = [];

let taskLabel = document.getElementById("task");
let categoryInput = document.getElementById("categoryInput");
let DeadLineStatus = document.getElementById("DeadLineStatus");
let taskStatus = document.getElementById("status");

let addTaskButton = document.getElementById("addTaskButton");
let taskL = document.getElementById("taskList");

let filterInput = document.getElementById("filterInput");
let filterButton = document.getElementById("filterButton")

addTaskButton.addEventListener("click", function () {
  
  let tasks = {
    task: taskLabel.value,
    category: categoryInput.value,
    deadLine: DeadLineStatus.value,
    status: taskStatus.value,
  };
  if(tasks.task === "" || tasks.category === "" || tasks.deadLine === "" || tasks.status === ""){
    alert("Please enter in each input field!");
    return;

  }

  taskList.push(tasks);
  showTasks();
  checkOverdueTasks();
  
  taskLabel.value = "";
  categoryInput.value = "";
  DeadLineStatus.value = "";
  taskStatus.value = "";

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

filterButton.addEventListener("click", function(){
let filter = filterInput.value

filterItem(filter)
function filterItem(searchTerm) {
  let terms = [];
  for (i = 0; i < taskList.length; i++) {
    if (taskList[i] === searchTerm) {
      terms.push(taskList[i]);
    }
  }
  return terms;
}
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