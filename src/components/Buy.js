import { useEffect, useContext, useState } from 'react'
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { fbCollectionOrders } from '../firebase'
import { contextFromCart } from '../context/CartContext';
import { InfinitySpin } from 'react-loader-spinner';

const Buy = ({name, phone, mail}) => {
	const { cart, total, clearCart } = useContext(contextFromCart)
	const [ID, setID] = useState(null)
	const [loading, setLoading] = useState(true)
	const order = {buyer: {name, phone, mail}, items: [], date: '', total: 0}
	
	order.items = cart
	order.total = total
	order.date = serverTimestamp()

	useEffect(() => {
		const document = addDoc(fbCollectionOrders, order)
		document.then( (res) => {
			setLoading(false)
			setID(res.id)
			clearCart()
		})
	}, [])
	
	return (
		loading?
		<div className='center'>
			<InfinitySpin color='orange' />
		</div>
		:
		<div className='column center'>
			<h2>GRACIAS POR TU COMPRA!</h2>
			<p>Tu comprobante: <b>{ID}</b></p>
		</div>
	)
}

export default Buy