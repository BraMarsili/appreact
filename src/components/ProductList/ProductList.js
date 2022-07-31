import Product from "../Product/Product"

const ProductList = ({items}) => {
    return (
        <div className="listProduct">
            <ul>
                {items.map(items => <Product key={items.id} items={items}/>)}
            </ul>
        </div>
    )
}

export default ProductList