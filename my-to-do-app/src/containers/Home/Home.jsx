import { useState } from "react";
import { ThemeContext } from '../../contexts/ThemeContext';
import { DebugContext } from "../../contexts/DebugContext";
import { useContext } from 'react';

import ListComponent from "../../components/List/ListComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";

import './Home.css'


const Home = ({toDoList, refProp, onAddTask, onDeleteAll, onDeleteOne, onHandleComplete, count}) => {
    const [isEmpty, setIsEmpty] = useState()
    const {debug} = useContext(DebugContext)
    const {theme} = useContext(ThemeContext)

    const validateTask = () => {
        const textInput = refProp.current.value.trim()
        if (textInput === "") {
            setIsEmpty(true);
        } else {
            onAddTask();
            setIsEmpty(false);
        }
    };

    const preventFormRefresh = (e) => {
        e.preventDefault()
    }


    return (
        <main className={`container ${theme} ${debug}`} id="main">
            <div className={`to-do-container to-do-container-${theme}`}>
                <h1 className={`to-do-header to-do-header-${theme}`}>My To-Do List</h1>

                <form onSubmit={preventFormRefresh}>
                    <input type="text" placeholder="Add new task..." ref={refProp} className="text-input"/>
                
                    {!isEmpty ? <p></p> : <p className="error-message">Task cannot be empty</p> }

                    <div className="main-buttons">
                        <input type="submit" value="Add Task" className="button add-task" onClick={validateTask}/>
                        <ButtonComponent fx={onDeleteAll} className={'delete-all'} buttonLabel={'Delete All'} />
                    </div>
                </form>

                
                <div className={`${count > 4 ? "list-container" : ''}`}>
                    <ul>
                        {toDoList.map((task,i) => {
                           return (
                
                            <ListComponent key={i}
                                index={i}
                                id={task.id} 
                                task={task.name} 
                                handleDeleteOne={onDeleteOne} 
                                liClass={'task'}
                                spanClass={`${!task.isComplete ? '' : "strikethrough"}`}
                                handleChange={onHandleComplete} 
                                checked={task.isChecked}/>
                            )}
                        )}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Home;