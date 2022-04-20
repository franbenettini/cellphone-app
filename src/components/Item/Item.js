import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id,name, img,price}) => {
    return (

        <section className='cardContainer'>
            <Link className='card' to={`/item/${id}`} style={{textDecoration: 'none', color:'black'}}>
                <div>
                    <picture>
                        <img src={img} alt={name}/>
                    </picture>
                </div>
                <div className='cardInfo'>
                    <h3>{name}</h3>
                    <p>${price}</p>
                </div>
            </Link>
        </section>
        
    )
}

export default Item