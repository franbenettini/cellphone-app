import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <h2>Por aca no era...</h2>
            <h4>Esta no era la pagina que buscabas</h4>

            <a href="/">
                <input className="button" type="button" value="Llevame al principio"></input>
            </a>
        </div>
    )
}

export default NotFound