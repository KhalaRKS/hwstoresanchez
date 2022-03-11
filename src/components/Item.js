import React, { useState } from 'react'

import ItemDetailContainer from './ItemDetailContainer'
import './Item.scss'

//const Item = ({title, description, price, pictureUrl}) => {
const Item = (props) => {
	const [stock, setStock] = useState( parseInt(Math.random() * 5) )
	const [showIDC, setShowIDC] = useState( false )

	const cb = () => { 
		setShowIDC(!showIDC)
	}
	console.log(props.title)

	return (
		<article className='productBox nice-border shadow'>
			<h2>{props.title}</h2>
			<img className='productPic' src={ 'pictures/' + props.pictureUrl  } />
			<span className='article--stock'>stock: <b>{stock}</b></span>
			<button onClick={ cb } >DETALLES</button>
			
			{ showIDC?<ItemDetailContainer {...props} stock={stock} callBack={ cb }/>:null }			
		</article>
	)
}

export default Item