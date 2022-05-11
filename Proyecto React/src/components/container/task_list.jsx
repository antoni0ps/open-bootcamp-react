import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask = new Task("Example", "Default description", true, LEVELS.URGENT);

    const defaultTask2 = new Task("Example2", "Default description2", false, LEVELS.NORMAL);

    const defaultTask3 = new Task("Example3", "Default description 3", false, LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, setTasks] = useState([
        defaultTask,
        defaultTask2,
        defaultTask3,
    ]);
    const [loading, setLoading] = useState([true]);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Task state has been modified");
        setLoading(false);

        return () => {
            console.log("TaskList component is going to unmount");
        };
    }, [tasks]);


    return (
        <div>
            <div className="col-12">
                <div className="card">
                    {/* Card header (title) */}
                    <div className p-3="card-header">
                        <h5>Your Tasks:</h5>
                    </div>
                    {/* Card body (content) */}
                    <div
                        className="card-body"
                        data-mdb-perfect-scroll="true"
                        style={{ position: "relative", height: "400px" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                            key={index}
                                            task={task}
                                        ></TaskComponent>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskListComponent;
