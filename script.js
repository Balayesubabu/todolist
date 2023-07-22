let todoItemsContainer = document.getElementById("todoItemsContainer");
let button = document.getElementById("button")
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2

    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3

    }
];
let todoCount = todoList.length;




function onTodolabelStatus(labelId, checkboxId) {
    let checkElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle("check")

}

function onTododeleteStatue(todoId) {
    let todoElement = document.getElementById(todoId);

    todoItemsContainer.removeChild(todoElement)
}



function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo



    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);
    todoElement.id = todoId

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelElement.onclick = function() {
        onTodolabelStatus(labelId)
    }
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
    deleteIcon.onclick = function() {
        onTododeleteStatue(todoId)
    }
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}



function onAddStatus() {
    let userinputElement = document.getElementById("todoUserInput")
    let inputValue = userinputElement.value

    if (inputValue === "") {
        alert("Enter the Valid Text");
        return
    }

    todoCount = todoCount + 1

    let newtodo = {
        text: inputValue,
        unique: todoCount
    }
    createAndAppendTodo(newtodo);
    inputValue.textContent = ""
}


button.onclick = function() {
    onAddStatus()

}