import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import { getDocs, query , where } from 'firebase/firestore'
import { fbCollection } from '../firebase'
import ItemDetail from './ItemDetail'
import NotFound from './NotFound'


const ItemDetailContainer = () => {
	const [product, setProduct] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	let { itemID } = useParams()
	
	useEffect(() => {
		const document = getDocs(query(fbCollection, where('id', '==', parseInt(itemID) )))
		document.then( (res) => {
			setError(false)
			setLoading(true)
			try {
				setProduct( res.docs[0].data() )	
			}
			catch (error) {
				if (error.name == 'TypeError'){
					setError(true)
				}
			}
		})
		document.catch( err => console.warn(err) )
		document.finally( () => setLoading(false) )
	}, [itemID])
	
	return (
		<>
			{ loading?<div className='container'><InfinitySpin color="orange" /></div>:error?<NotFound id={itemID} />:<ItemDetail { ...product } /> }
		</>
	)
}

export default ItemDetailContainer