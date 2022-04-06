import Counter from '../ItemCount/ItemCount'; 


const ItemDetail = ({ name, img, price, description}) => {


    const handleOnAdd = (quantity) => { 
        console.log(`se agregaron ${quantity} productos`)
    }


    return(
        <div>
            <section>
                <picture>
                    <img src={img} alt={name}/>
                </picture>
                <h3>{name}</h3>
                <span>{price}</span>
                <p>{description}</p>
            </section>
            <Counter initial={1} stock={10} onAdd={handleOnAdd}/>
        </div>
    )
}



export default ItemDetail