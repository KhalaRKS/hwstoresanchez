import React, { useEffect, useState } from 'react'

import ItemDetailContainer from './ItemDetailContainer'

import './ItemCount.scss'

const ItemCount = ({initial, stock, onAdd}) => {

	const [initialValue, setInitialValue] = useState( initial )
	
	const substractItem = () => {
		if (initialValue > 1)
		setInitialValue( initialValue - 1 )
	}
	const addItem = () => {
		if (initialValue < stock)
		setInitialValue( initialValue + 1 )
	}
	const buyItem = () => {
		let temp = stock-initialValue
		
		setInitialValue( 1 )
		onAdd(initialValue)
	}
	return (
		<div className='itemCount'>
			<div className='itemCount__controls'>
				<button onClick={ substractItem }><span className="material-icons-outlined">remove</span></button>
				<span><b>{ initialValue }</b></span>
				<button onClick={ addItem }><span className="material-icons-outlined">add</span></button>
			</div>
			<button className='itemCount__controls--big' onClick={ () => buyItem()  } disabled={ stock==0 }>
				<div className='itemCount__controls--big__add'>
					<span className="material-icons-outlined">shopping_cart</span>
					<span>AGREGAR</span>
				</div>
			</button>
		</div>
	)
}

export default ItemCount