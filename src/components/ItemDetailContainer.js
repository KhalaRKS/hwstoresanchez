import React, {useEffect, useState} from 'react'
import { InfinitySpin } from 'react-loader-spinner'

import ItemDetail from './ItemDetail'

const ItemDetailContainer = (props) => {

	const [product, setProduct] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		
		setLoading(true)
		const request = new Promise((res, rej) => {
			setTimeout(() => { res(props) }, 2000)
		})
	
		request.then((result) => {
			setProduct(result)
			setLoading(false)
		})	
	}, [props])
	
	return (
		<div className='ItemDetailContainerBox'>
			{ loading?<div className='loader'><InfinitySpin color="orange" /></div>:<ItemDetail {...product} /> }
		</div>
	)
}

export default ItemDetailContainer