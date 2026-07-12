$(document).ready(function(){
    $("#btn").click(function(){
        // Get the task
        let task = $("#txt").val().trim();

        // Check if empty
        if(task === ""){
            alert("Enter a Task");
            return;
        }

        // Create list item
        let li = $("<li></li>");

        // Create task text
        let span = $("<span></span>").html(task);

        // Create Edit button
        let editbtn = $("<button></button>").html("Edit");

        // Create Delete button
        let deletebtn = $("<button></button>").html("Delete Task");

        // Add elements to list item
        li.append(span);
        li.append(editbtn);
        li.append(deletebtn);

        // Add list item to ordered list
        $("#list").append(li);

        // Clear input field
        $("#txt").val("");

        // Update Task
        editbtn.click(function(){

            let newTask = prompt("Edit Task", span.html());

            if (newTask !== null && newTask.trim() !== ""){
                span.html(newTask.trim());
            }

        });

        // Delete Task
        deletebtn.click(function(){
            li.remove();
        });

    });

});