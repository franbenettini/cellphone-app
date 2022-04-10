import { Link } from 'react-router-dom'
import { Card, ContainerItem } from './Item.element'

const Item = ({ id,name, img,price}) => {
    return (

        <ContainerItem>
            <Link to={`/item/${id}`} style={{textDecoration: 'none', color:'black'}}>
                <Card>
                    <img width="150" height="250" src={img} alt={name}/>
                    <h3>{name}</h3>
                    <p>${price}</p>
                </Card>  
            </Link>
        </ContainerItem>
        
    )
}

export default Item