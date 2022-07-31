import './ItemListContainer.css'
import { useState,useEffect } from 'react'
import { getItems } from '../../asyncMock'
import ProductList from '../ProductList/ProductList'

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState ([])

    useEffect(() => {
        getItems().then(items => {
            setItems(items)
        })
    }, [])

    return (
        <>
        <h1 className="greeting">{greeting}</h1>
        <ProductList items={items}/>
        </>
    )
}

export default ItemListContainer