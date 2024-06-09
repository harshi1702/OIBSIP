let tasks=[];
function addTask(){
    const taskInput = document.getElementById('new-task');
        const taskText=taskInput.ariaValueMax.trim();
        if(taskText!==''){
            const task={
                id:Date.now(),
                text: taskText,
                completed:false,
                createdAt:newDate().toLocaleString()};
                tasks.push(task);
                taskInput.value='';
                renderTasks();
            }
        }
        function renderTasks(){
            const pendingTasks = document.getElementById('completed-tasks');
            pendingTasks.innerHTML='';
            cpmpletedTasks.innerHTML='';
            tasks.forEach(task=>{
                const taskItem = document.createElement("li");
                taskItem.textContent = '${task.text} (Added:${task.createdAt})';
                taskItem.dataset.id = task.id;
                const actions = document.createElement('div');
                const completeButton = document.createElement('button');
                completeButton.textContent = task.completed? 'unmark':'complete';
                completeButton.onclick=()=>toggleTaskCompletion(task.id);
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.onclick=()=>editTask(task.id);
                const deleteButton.textContent='Delete';
                deleteButton.onclick = ()=>deleteTask(task.id);
                actions.appendChild(completeButton);
                actions.appendChild(editButton);
                actions.appendChild(deleteButton);
                taskItem.appendChild(actions);
                if(task.completed){
                    taskItem.classList.add("completed");
                    taskItem.innerHTML+=(completed:${task.completedAt});
                    completedTasks.appendChild(taskItem);
                }
                else{
                    pendingTasks.appendChild(taskItem);

                }
            });
            function toggleTaskCompletion(taskID){
                const task = tasks.find(t=>t.id ===taskId);
                task.completed=!task.completed;
                if(task.completed){
                    task.completedAt = newDate().toLocateString();
                }
                else{
                    delete task.completedAt;
                }
                renderTasks();
            }
            function editTask(taskID){
                const task = tasks.find(t=>t.id==taskID);
                const newText = prompt('Edit task',task.text);
                if(newText!=null&& newText.trim()!==''){
                    task.text = newText.trim();
                    renderTasks();
                }
            }
            function deleteTask(taskID){
                tasks = tasks.filter(t=>t.id!==taskID);
                renderTasks();
            }
            renderTasks();
        }



    
