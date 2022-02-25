import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ProductBox = () => {

	const [state, setState] = useState( null )

	const cb = (dato) => { setState(dato) }

	return (
		<article className='nice-border shadow'>
			<h5>iPhone 13 Pro</h5>
			<p>lorem</p>
			<span>$1000</span>
			<ItemCount stock={ parseInt(1 + Math.random() * 10) } initial={1} onAdd={cb} />
			{state && <span onClick={ () => setState(null) } className='resultonadd'>Resultado onAdd: {state}</span>}
		</article>
	)
}

export default ProductBox