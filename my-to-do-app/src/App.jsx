import { useRef, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from "./contexts/ThemeContext";
import { DebugContext } from "./contexts/DebugContext";
import Header from "./components/Header/Header";
import History from "./containers/History/History";
import Search from "./containers/Search/Search";
import Home from "./containers/Home/Home";
import TaskDetail from "./components/TaskDetail/TaskDetail";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import './App.css'


const App = () => {
    const ref = useRef()
    const [theme, setTheme] = useState("light")
    const [debug, setDebug] = useState("off")
    const [toDoList, setToDoList] = useState([
      {
        id: 1,
        name: "laundry",
        isComplete: false,
        isChecked: false,
        isDeleted: false
      },
      {
        id: 2,
        name: "groceries",
        isComplete: false,
        isChecked: false,
        isDeleted: false
      },
      {
        id: 3,
        name: "homework",
        isComplete: false,
        isChecked: false,
        isDeleted: false
      }
    ])

    const [historyList, setHistoryList] = useState([])
    const [deletedList, setDeletedList] = useState([])
    const fullList = [...deletedList, ...toDoList]

    const addTask = () => {
      const textInput = ref.current.value
      const newTask = {id: toDoList.length + 1, name: textInput, isComplete: false, isChecked: false, isDeleted:false}
      const newToDoList = [...toDoList, newTask]
      
      setToDoList(newToDoList)
      ref.current.value = ""
    }

    const deleteAll = () => {
      //set deleted status to true
      toDoList.map((t) => {
        t.isDeleted = true
      })
      //add all tasks to deleted before clearing main to do list
      const newDeletedList = [...deletedList, ...toDoList]
      setDeletedList(newDeletedList)

      setToDoList([])
    }

    const deleteOne = (index) => {
      //locate task
      const completedTask = toDoList[index]
      completedTask.isDeleted = true
      const newDeletedList = [...deletedList, completedTask]
      setDeletedList(newDeletedList)

      //using splice + concat to cut out item and rebuild array (remvove from main toDo and history/completed list)
      const newToDoList = toDoList.slice(0, index).concat(toDoList.slice(index+1))
      //note: tried to use filter method but task.index for string arrays is undefined and causing all strings to be removed from the array
      setToDoList(newToDoList)

      const newHistoryList = historyList.filter(t => t.name != completedTask.name)
      setHistoryList(newHistoryList)
  }


  const handleComplete = (index,e) => {
    //locate task
    const completedTask = toDoList[index]
    
    //toggle isComplete boolean & add/remove task from completed history based on current status
    handleStrikeThroughToggle(completedTask,e)
  }

    const handleStrikeThroughToggle = (completedTask, e) => {
        //strikethrough toggle
        if (!completedTask.isComplete) {
          completedTask.isComplete = true
          completedTask.isChecked=true
          const newHistoryListAdd = [...historyList, completedTask] 
          setHistoryList(newHistoryListAdd)
        } else {
          completedTask.isComplete = false
          completedTask.isChecked=false
          const newHistoryListRemove = historyList.filter(t => t.name != completedTask.name)
          setHistoryList(newHistoryListRemove)
        }
    }



    
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <DebugContext.Provider value={{debug,setDebug}}>
        <Header count={toDoList.length}/>

        <Routes>
          <Route path="/" element={<Home toDoList={toDoList} 
              refProp={ref} onAddTask={addTask} onDeleteAll={deleteAll} 
              onDeleteOne={deleteOne} onHandleComplete={handleComplete} 
              count={toDoList.length} />} />
          <Route path="/history" element={<History historyList={historyList} deletedList={deletedList} />} />
          <Route path="/search" element={<Search fullList={fullList} />} />
          <Route path="/tasks/:taskId" element={<TaskDetail tasks={toDoList}/>} />
          <Route path="*" element={<ErrorPage /> } />
        </Routes>

        <Footer />
      </DebugContext.Provider>
    </ThemeContext.Provider>
      
  )
}

export default App
