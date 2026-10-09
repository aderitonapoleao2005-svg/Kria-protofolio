const task = document.getElementById("tarefa");
const aumenta = document.getElementById("aumenta");
const taskContainer = document.getElementById("tasks-container");

const notice = document.getElementById("notice");

function hatudu(mensagen){
    notice.textContent=mensagen;
    setTimeout(()=>{
        notice.textContent="";
    },1000);

}
aumenta.addEventListener("click", () => {
  if (task.value.trim() == "") {
    return hatudu("Please enter the task!!");
  } else {
    hatudu ( "Success Add Your Task!!");
  }



  const todoWrapper = document.createElement("div");
  const deleteButton = document.createElement("button");
  const taskText = document.createElement("p");

  todoWrapper.classList.add("todo-container");
  deleteButton.classList.add("delete-button");
  taskText.classList.add("task-text");

  deleteButton.textContent = "DELETE";

  taskText.textContent = task.value;
  todoWrapper.append(taskText);
  todoWrapper.append(deleteButton);
  taskContainer.append(todoWrapper);

  task.value = "";

  deleteButton.addEventListener("click", () => {
    todoWrapper.remove();
  });

  taskText.addEventListener("click", () => {
    taskText.classList.toggle("remata");
  });
});

function teklaAkontese(event) {
  if (event.key === "Enter") {
    aumenta.click();
  }
}
task.addEventListener("keydown", teklaAkontese);

