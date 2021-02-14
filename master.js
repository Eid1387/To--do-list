let  inputFiled = document.querySelector(".add-task input"),
 AddButton = document.querySelector(".add-task .plus");
    taskContainer = document.querySelector(".task-content"),
    taskCount   =  document.querySelector(".tasks-count span"),
    taskCompleted = document.querySelector(".tasks-completed span");

    window.onload = function(){
        inputFiled.focus()
    }

    AddButton.onclick = function() {

        if ( inputFiled.value === ''){

            console.log("no value")

        } else {

            notaskMsg    = document.querySelector(".no-tasks-massege");
   if(document.body.contains(document.querySelector(".no-tasks-massege"))){

    notaskMsg.remove();
   }

  


            // create main span 
             let mainSpan = document.createElement("span");
            // set text in the span
      
            let deleteButton = document.createElement("span");

            let textSpan =  document.createTextNode(inputFiled.value);

            let textDelete =  document.createTextNode("delete");

            mainSpan.appendChild(textSpan)
            // set class to main span
            mainSpan.className="task-box";
            // create delete button
          
    
            deleteButton.appendChild(textDelete);

            deleteButton.className="delete";
            // append delete button in main span
            mainSpan.appendChild( deleteButton )
            // append main span to taskContainer
            taskContainer.appendChild(mainSpan);
            inputFiled.value = '';
            inputFiled.focus() 
            calculate ()
   

        }
    }

    document.addEventListener("click", function(e){

    if(e.target.className=="delete"){

        e.target.parentNode.remove()
        if( taskContainer.childElementCount==0 ){
            createspan ()
           }
    }
    if(e.target.classList.contains="task-box"){

        e.target.classList.toggle("finished")
    }

    calculate ()
    })

function createspan () {
    let noMsg = document.createElement("span"),
        text=document.createTextNode(" no tasks to show");
        noMsg.appendChild( text);
        taskContainer.appendChild(noMsg)
}

function calculate () {

  // Calculate All Tasks
  taskCount.innerHTML = document.querySelectorAll('.task-content .task-box').length;

  // Calculate Completed Tasks
  taskCompleted.innerHTML = document.querySelectorAll('.task-content .finished').length;}