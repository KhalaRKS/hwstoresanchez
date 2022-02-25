import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ProductBox = () => {
	const [state, setState] = useState( null )
	const stock = parseInt(Math.random() * 5)

	const cb = (dato) => { setState(dato) }

	return (
		<article className='nice-border shadow'>
			<span className='article--stock'>stock: <b>{stock}</b></span>
			<h3>iPhone 13 Pro</h3>
			<p>lorem</p>
			<span>$1000</span>
			<ItemCount stock={ stock } initial={1} onAdd={cb} />
			{state && <span onClick={ () => setState(null) } className='resultonadd'>Resultado onAdd: {state}</span>}
		</article>
	)
}

export default ProductBox