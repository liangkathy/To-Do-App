import { useParams } from "react-router-dom";
import { ThemeContext } from '../../contexts/ThemeContext';
import { DebugContext } from "../../contexts/DebugContext";
import { useContext } from 'react';

const TaskDetail = ({tasks}) => {
    const {theme} = useContext(ThemeContext)
    const {debug} = useContext(DebugContext)
    const {taskId} = useParams()
    const task = tasks.find(t => t.id === parseInt(taskId))

    //if task undefined aka false
    if(!task) {
        return (<h2>Task not found</h2>)
    }

    return (
        <div className={`task-detail container ${theme} ${debug}`}>
            <h2>Task Details</h2>
            <p>Task: {task.name}</p>
            <p>Completion status: {!task.isComplete ? <span>Incomplete</span> : <span>Completed</span>}</p>
        </div>
        
    )
}

export default TaskDetail;