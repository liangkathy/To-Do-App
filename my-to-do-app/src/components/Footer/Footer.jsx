import Toggle from "../Toggle/Toggle"
import { ThemeContext } from "../../contexts/ThemeContext"
import { DebugContext } from "../../contexts/DebugContext"
import { useContext } from "react"

import './Footer.css'

const Footer = () => {
    const {theme} = useContext(ThemeContext)
    const {debug} = useContext(DebugContext)
    return (
        <footer className={`footer footer-${theme} ${theme} ${debug}`}>
            
            <div className="site-settings">
                <p>Site Settings: </p>
                <div className="toggle-container">
                    <Toggle className={"theme"}/>
                    <label>Dark Mode</label>

                </div>

                {/* <div className="toggle-container">
                    <Toggle className={"debugger"} />
                    <label>Debugger</label>

                </div> */}
            </div>
        </footer>
    )
}

export default Footer