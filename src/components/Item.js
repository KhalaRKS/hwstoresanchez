import React, { useState } from 'react'
import ItemCount from './ItemCount'
import './Item.scss'

const Item = ({title, description, price, pictureUrl}) => {
	const [counter, setCounter] = useState( null )
	const [stock, setStock] = useState( parseInt(Math.random() * 5) ) //
	

	const cb = (dato) => { setCounter(dato) }

	return (
		<article className='productBox nice-border shadow'>
			<span className='article--stock'>stock: <b>{stock}</b></span>
			<h2>{title}</h2>
			<img className='productPic' src={ 'pictures/' + pictureUrl  } />
			<h4>${price}</h4>
			<p>{description}</p>
			<ItemCount stock={ stock } initial={1} onAdd={cb} />
			{counter && <span onClick={ () => setCounter(null) } className='resultonadd'>Resultado onAdd: {counter}</span>}
		</article>
	)
}

export default Item