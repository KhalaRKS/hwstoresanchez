import { useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { fbCollectionOrders } from '../firebase'
import { getDoc, doc } from 'firebase/firestore'
import toast from 'react-hot-toast'

const Admin = () => {

	const [order, setOrder] = useState(false)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const checkOrder = (e) => {
		e.preventDefault()
		if (e.target[0].value == ''){
			toast.error('Se necesita un ID.')
			return
		} 
		setLoading(true)
		setError(false)
		setOrder(false)
		
		const document = getDoc(doc(fbCollectionOrders, e.target[0].value))
		document.then( (res) => {
			if (res.data() == undefined){
				setError(true)
				setOrder(true)
				return
			}
			setOrder(res)
		})
		document.catch( err => console.warn(err) )
		document.finally( () => setLoading(false) )
	}

	return (
		<div className='column center'>
			<h2>CONSULTA EL ESTADO DE TU COMPRA</h2>
			<form onSubmit={ e => checkOrder(e)}>
				<input className='firebaseid' />
				<button disabled={loading}>CONSULTAR</button>
			</form>
			<div className='center column mt'>
				{loading ?
					<InfinitySpin color='orange' />
				:
					order && (error ?
					<span>Orden no encontrada. Revisa el ID.</span>
					:
					<>
						<span><b>Orden:</b> {order.id}.</span>
						<span><b>Fecha:</b> {Date(order.data().date.seconds)}</span>
						<span><b>Monto final:</b> ${order.data().total}</span>
						<br/>
						{order.data().items.map( (item, index) => {
							return <span key={index}><b>Producto:</b> {item.title} | <b>Precio:</b> ${item.price} | <b>Cantidad:</b>	 {item.qt}</span>
						})
						}
					</>
					)
				}
			</div>
		</div>
	)
}

export default Admin