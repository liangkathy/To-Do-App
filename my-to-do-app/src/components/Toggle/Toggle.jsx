import './Toggle.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { DebugContext } from '../../contexts/DebugContext';
import { useContext } from 'react';
const Toggle = ({className}) => {

    const {theme, setTheme} = useContext(ThemeContext)
    const {debug, setDebug} = useContext(DebugContext)

    const handleThemeToggle = (e) => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const handleDebugToggle = () => {
        setDebug(debug === "off" ? "on" : "off")
    }

    return (
        <label className={`switch ${className}`}>
            <input type="checkbox" onChange={
                className === "theme" ? handleThemeToggle : handleDebugToggle
            }/>
            <span className="slider round"></span>
        </label>
    )
}

export default Toggle;