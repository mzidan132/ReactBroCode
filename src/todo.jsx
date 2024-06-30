import {useState} from 'react'

export default function Todo(){

    const [task, setTask] = useState(['Eat','Sleep','Code'])
    const [newTask, setNewTask] = useState("")

    function inputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("")
        }
    }

    function deleteTask(index){
        const updatedTask = task.filter((_, i) => i!==index)
        setTask(updatedTask)
    }

    function taskUp(index){
        if(index > 0){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            setTask(updatedTasks);
        }
    }

    function taskDown(index){
        if(index < task.length-1){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
            setTask(updatedTasks);
        }
    }

    return(
        <div>
            <h2>TodoList</h2>
            <div>
                <input type="text" value={newTask} onChange={inputChange} />
                <button onClick={addTask}>Add task</button>
            </div>
            <ol>
                {task.map((task, index) => <li key = {index}> {task} 
                    <button onClick={() => deleteTask(index)}>Delete</button>
                    <button onClick={() => taskUp(index)}>Up</button>
                    <button onClick={() => taskDown(index)}>Down</button>
                </li>)}
            </ol>
        </div>
    );

}