import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartdiv' style={{color: 'white'}}>
            <img className='cartImg' src='images/cart.svg' alt='CartWidget' />
            <p>0</p>
        </div>
    )
}

export default CartWidget