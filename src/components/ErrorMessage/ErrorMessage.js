import './ErrorMessage.css'

const ErrorMessage = ({message}) => {
    return (
        <span className="errorMessage">
            {message}
        </span>
    )
}

export default ErrorMessage

