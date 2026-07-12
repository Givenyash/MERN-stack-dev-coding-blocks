let input = document.getElementById("txt");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", function () {

    // Get the task
    let task = input.value.trim();

    // Check if empty
    if (task === "") {
        alert("Enter a Task");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Create task text
    let span = document.createElement("span");
    span.innerText = task;

    // Create Edit button
    let editbtn = document.createElement("button");
    editbtn.innerText = "Edit";

    // Create Delete button
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete Task";

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(editbtn);
    li.appendChild(deletebtn);

    // Add list item to ordered list
    list.appendChild(li);

    // Clear input field
    input.value = "";

    // Update Task
    editbtn.addEventListener("click", function () {

        let newTask = prompt("Edit Task", span.innerText);

        if (newTask !== null && newTask.trim() !== "") {
            span.innerText = newTask.trim();
        }

    });

    // Delete Task
    deletebtn.addEventListener("click", function () {

        li.remove();

    });

});