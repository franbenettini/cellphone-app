import Counter from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {

    const handleOnAdd = (quantity, onAdd) => { 
         console.log(`se agregaron ${quantity} productos`)
        
    }

    return(
        <>
            <h2>{props.greeting}</h2>
            <Counter initial={1} stock={10} onAdd={handleOnAdd}/>
            <Counter initial={1} stock={15} onAdd={handleOnAdd}/>
        </>
    )
}

export default ItemListContainer