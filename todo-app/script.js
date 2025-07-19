const taskinput=document.getElementById("taskinput")
const addbtn=document.getElementById("addbtn")
const tasklist=document.getElementById("tasklist")

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
renderTasks();

addbtn.addEventListener('click',()=>{
    const task=taskinput.value.trim();
    if(task){
        tasks.push(task);
        taskinput.value="";
        savetask();
        renderTasks();
    }
});
function renderTasks(){
    tasklist.innerHTML="";
    tasks.forEach((task,index) =>{
        const li=document.createElement("li");
        li.textContent=task;
        const deletebtn=document.createElement('button');
        deletebtn.textContent="remove"
        deletebtn.addEventListener('click',()=>{
            tasks.splice(index,1);
            savetask();
            renderTasks();
        });
        li.appendChild(deletebtn);
        tasklist.appendChild(li);

    });
    
}
function savetask(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}








