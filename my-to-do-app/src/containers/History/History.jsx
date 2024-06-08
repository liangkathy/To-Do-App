import { ThemeContext } from '../../contexts/ThemeContext';
import { DebugContext } from '../../contexts/DebugContext';
import { useContext } from 'react';
import './History.css'
const History = ({historyList, deletedList}) => {
    const {theme} = useContext(ThemeContext)
    const {debug} = useContext(DebugContext)

    return (
        <div className={`container ${theme} ${debug}`}>
            <div className="history-container">  
                <h2>History</h2>
                {
                    historyList.length === 0 ? <> <h4>Completed tasks: </h4> <p>No completed tasks</p> </> : 
                    <>
                    <h4>Completed tasks: </h4> 
                    <ul>
                        {historyList.map((task,i) => {
                            return <li key={i} className="task-history">{task.name}</li>
                            })
                        }
                    </ul>
                    </>
                }
                {
                    deletedList.length === 0 ? <> <h4>Deleted tasks: </h4> <p>No deleted tasks</p> </>  : 
                    <>
                    <h4>Deleted tasks: </h4> 
                    <ul>
                        {deletedList.map((task,i) => {
                            return <li key={i} className="deleted-task">{task.name}</li>
                            })
                        }
                    </ul>
                    </>
                }
            </div>
        </div>
    )
}

export default History;