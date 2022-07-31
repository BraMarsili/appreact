const Product = ({items}) => {
    return (
        <li>
            <h3>{items.name}</h3>
            <img src={items.img} alt={items.name}/>
        </li>
    )
}

export default Product