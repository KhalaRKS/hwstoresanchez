import React, { useEffect, useContext, useState } from 'react'

import { addDoc, serverTimestamp } from 'firebase/firestore';
import { fbCollection, dbFirestore, fbCollectionOrders } from '../firebase'
import { contextFromCart } from '../context/CartContext';
import { InfinitySpin } from 'react-loader-spinner';

const Buy = ({name, phone, mail}) => {
	const { cart, total, clearCart } = useContext(contextFromCart)
	const [ID, setID] = useState(null)
	const [loading, setLoading] = useState(true)
	const order = {buyer: {name: name, phone: phone, email: mail}, items: [], date: '', total: 0}
	
	cart.map( (product) => {
		for (let index = 0; index < product.qt; index++) {
			order.items.push({ id: product.id, title: product.title, price: product.price })
			order.total += product.price
		}
	})
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
	//{ buyer: { name, phone, email }, items: [{ id, title, price }], date, total  }
}

export default Buy