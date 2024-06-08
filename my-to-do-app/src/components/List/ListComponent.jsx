import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import './ListComponent.css'

const ListComponent = ({index, id, task, handleDeleteOne, liClass, spanClass, handleChange, checked}) => {
    return (
        <li className={liClass}>
            <input type="checkbox" 
                name={task} 
                onChange={(e)=>{handleChange(index,e)}} 
                checked={checked}
                className="checkbox"
                />
        <Link to={`/tasks/${id}`}><span className={spanClass}>{task}</span></Link>
        <FaTrashAlt className="trash" onClick={()=>{handleDeleteOne(index)}}/>
        </li>
    )
}

export default ListComponent;