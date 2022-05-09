import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    // Estado del componente
    const [taskList, setTasks] = useState([defaultTask]);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified');
        
        return () => {
            console.log('TaskList component is going to unmount');
        };
    }, [taskList]);

    const changeCompleted = (id) => {
        
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* TODO: Aplicar un for/Map para renderizar una lista */}
            <TaskComponent task={defaultTask} />
        </div>
    );
};





export default TaskListComponent;
