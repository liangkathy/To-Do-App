import { useRef, useState } from "react";
import { ThemeContext } from '../../contexts/ThemeContext';
import { DebugContext } from "../../contexts/DebugContext";
import { useContext } from 'react';
import './Search.css'

const Search = ({fullList}) => {
    const {theme} = useContext(ThemeContext)
    const {debug} = useContext(DebugContext)
    const ref = useRef();
    const [searchResults, setSearchResults] = useState([])
    const [isSearchEmpty, setIsSearchEmpty] = useState()

    const validateSearch = (e) => {
        e.preventDefault()

        if (ref.current.value.trim() === "" ) {
            setIsSearchEmpty(true)
        } else {
            handleSearch()
            setIsSearchEmpty(false)
        }
    }

    const handleSearch = () => {
    
        const searchInput = ref.current.value;
        const matchingTasks = fullList.filter(task => task.name.toLowerCase().includes(searchInput.toLowerCase()))

        setSearchResults(matchingTasks)
        ref.current.value = ""
    }

    return (
        <div className={`container ${theme} ${debug}`}>
            <div className="search-results-container">
                <h2>Search</h2>
                {!isSearchEmpty ? <p></p> : <p className="error-message">Search cannot be empty</p>}
                <form className="search-form">
                    <input type="text" placeholder="Search for tasks..." ref={ref} className="text-input" />
                    <input type="submit" value="Search" className="button search-button" onClick={validateSearch}/>
                </form>

            
                <h4>Matching tasks:</h4>
                {
                    searchResults.length === 0 ? <p>No results found</p> : searchResults.map((result,i) => {
                        return (
                        <>
                            <li key={i} className="search-result">{result.name}</li>
                            <div className="status">
                            {
                                result.isDeleted == true ? 'Status: Deleted' : 
                                (
                                    result.isComplete == true ? 'Status: Completed' : 'Status: Incomplete'
                                )
                            }
                            </div>
                        </>)
                    })
                }
                
            </div>
        </div>
    )
}

export default Search;