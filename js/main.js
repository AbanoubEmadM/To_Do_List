let addBtn = document.getElementById("add");
let taskInp = document.getElementById("task-name");
let myTask = document.getElementById("my-tasks");
let clearAll = document.getElementById("clear")
addBtn.addEventListener("click", checkValue);

function checkValue() {
    if (taskInp.value === "") {
        swal("Sorry!", "You Have To Write Task Name!", "error");
    } else {
        let createdTask = `
        <div id="main-task">
            <div id="created-task" class="created-task">
                <input disabled id="input-task" value="${taskInp.value}">
                <i onclick="removeItem()" class="fa-solid fa-xmark" id="close"></i>
                <i onclick="handleEdit()" class="fa-solid fa-pen" id="edit"></i>
                <i onclick="acceptEdit()" style="display:none" class="fa-solid fa-check" id="check"></i>
                </div>
        </div>
        `
        myTask.innerHTML += createdTask;
        taskInp.value = "";
        handleEdit();
        acceptEdit();
        removeItem();
    }
}
clearAll.onclick = function () {
    document.querySelectorAll("#main-task").forEach(ele => {
        ele.style.display = 'none';
    })
}
function removeItem() {
    Array.from(document.querySelectorAll("#close")).forEach(close=>{
        close.onclick = function(){
            close.parentElement.style.display = 'none'
        }
    })
}
function handleEdit(){
    let editBtns = Array.from(document.querySelectorAll("#edit"));
    let allChecks = Array.from(document.querySelectorAll("#check"));
    let allInps = Array.from(document.querySelectorAll("#input-task"));
    Array.from(document.querySelectorAll("#edit")).forEach(edit =>{
        edit.onclick = function(){
            let index = editBtns.indexOf(edit);
            allInps[index].disabled = false;
            allChecks[index].style.display = 'block'
            this.style.display = 'none'
        }
    })
}

function acceptEdit(){
    let editBtns = Array.from(document.querySelectorAll("#edit"));
    let allInps = Array.from(document.querySelectorAll("#input-task"));
    let allChecks = Array.from(document.querySelectorAll("#check"));
    allChecks.forEach(check =>{
        check.onclick = function(){
            let index = allChecks.indexOf(check);
            allInps[index].disabled = true;
            editBtns[index].style.display = 'block';
            this.style.display = 'none'
        }
    })

}