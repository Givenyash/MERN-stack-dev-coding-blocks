loadtodos();
async function loadtodos(){
    const response=await fetch("/todos");
    const todos=await response.json();
    const div=document.getElementById("todos");
    div.innerHTML=""; // reason btata hoon baad me
    todos.forEach((todo) => {
        div.innerHTML+=`
        <div>
            <span> ${todo.title}</span>
            <div>
            <button onclick="edittodo('${todo._id}','${todo.title}')">Edit</button>
            <button onclick="deletetodo('${todo._id}')"> Delete</button>
            </div>
        </div>
        `
    });
}
async function addtodo(){
    const title=document.getElementById("title").value;
    if(title===""){
        alert("Enter Todo");
        return;
    }
    await fetch("/todos",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            title:title
        })
    })
    document.getElementById("title").value="";
    loadtodos();
}
async function deletetodo(id){
    await fetch("/todos/"+id,{
        method:"DELETE"
    })
    loadtodos();
}
async function edittodo(id,title){
    const newtitle=prompt("Enter  new todo",title);
    if(!newtitle) return;
    await fetch("/todos/"+id,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            title:newtitle
        })
    })
    loadtodos();
}