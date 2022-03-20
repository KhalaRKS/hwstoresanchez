import React, {createContext, useState, useEffect} from 'react'

export const contextFromCart = createContext()
const { Provider } = contextFromCart

const CartContext = ({ children }) => {

	const [cart, setCart] = useState([])
	const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

	useEffect(() => {
		let auxCount = 0
		cart.forEach(item => {
			auxCount+=item.price*item.qt
		})
		setTotal(auxCount)
	}, [cart])
	
	const addItem = (id, qt, title, price) => {
		if (cart.length == 0){
			setCart( [{id, qt, title, price }] )
			setQuantity(qt)
		}else{
			if (!isInCart(id)) {
				setCart( [...cart, {id, qt, title, price }] )
			}else{
				let auxCart = cart.slice()
				let index = cart.findIndex(value => value.id == id)
				auxCart[index].qt += qt
				setCart(auxCart)
			}
			setQuantity(quantity + qt)
		}
	}

	const removeItem = (itemID) => {
		/*let index = cart.findIndex(value => value.id == itemID)
		let auxCart = cart.slice()
		console.log('QT', cart[index].qt)

		setQuantity(quantity - auxCart[index].qt)
		auxCart.splice(index, 1)
		
		setCart( auxCart )*/
		
		setCart( cart.filter( value => {
			if (value.id == itemID ) {
				setQuantity(quantity-value.qt)
				return false
			}
			return true
		}	) )
	}

	const clearCart = () => {
		setCart([])
		setQuantity(0)
	}

	const isInCart = (itemID) => {
		return cart.some((item) => item.id == itemID)
	}

	const initialContext = { 
		cart,
		quantity,
		total,
		addItem,
		removeItem,
		clearCart
	}

	return (
		<Provider value={initialContext}>{children}</Provider>
	)
}

export default CartContext