import './ErrorPage.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { DebugContext } from '../../contexts/DebugContext';
import { useContext } from 'react';

const ErrorPage = () => {
    const {theme} = useContext(ThemeContext)
    const {debug} = useContext(DebugContext)
    return (
        <div className={`container ${theme} ${debug}`}>
            <h2 className="error-heading">Error - Page not found!</h2>
        </div>
    )
}

export default ErrorPage;