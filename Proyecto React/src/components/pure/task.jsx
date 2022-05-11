import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importamos la hoja de estilos de task.css
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task }) => {

    //Con cada modificación en el componente task se ejecuta esta función
    useEffect(() => {
        console.log('Task created');

        return () => {
            console.log(`Task ${task.name} is going to unmount`);

        };
    }, [task]);


    /**
     * Funcion que devuelve una insignia dependiendo del nivel de la tarea
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-primary">
                            {task.level}
                        </span>
                    </h6>   
                )
                case LEVELS.URGENT:
                    return (
                        <h6 className="mb-0">
                            <span className="badge bg-warning">
                                {task.level}
                            </span>
                        </h6>   
                )
                case LEVELS.BLOCKING:
                    return (
                        <h6 className="mb-0">
                            <span className="badge bg-danger">
                                {task.level}
                            </span>
                        </h6>   
                    )
                default:
                    break;
                
        }
    }

    /**
     * Funcion que devuelve el icono correspondiente segun el estado de la tarea
     * @returns icon
     */
    function taskCompletedIcon() {
        if (task.completed) {
            return (<i className="bi-toggle-on" style={{ color: 'green', fontSize: '20px' }}></i>)
        } else {
            return (<i className="bi-toggle-off" style={{color: 'grey', fontSize:'20px'}}></i>)
        }
    }


    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{task.name}</span>
            </th>
            <td className="align-middle">
                <span>{task.description}</span>
            </td>
            <td className="align-middle">
                {/* Ejecución de la funcion que define la insignia segun nivel */}
                {taskLevelBadge()}
            </td>
            <td className="align-middle">
                {/* Ejecución de la funcion que devuelve el icono de completado/no completado segun el estado */}
                {taskCompletedIcon()}
                <i className="bi-trash" style={{color: 'tomato', fontSize:'20px'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
