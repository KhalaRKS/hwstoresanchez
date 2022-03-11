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
	
	return (
		<div className='itemCount'>
			<div className='itemCount__controls'>
				<button onClick={ substractItem }><span class="material-icons-outlined">remove</span></button>
				<span><b>{ initialValue }</b></span>
				<button onClick={ addItem }><span class="material-icons-outlined">add</span></button>
			</div>
			<button className='itemCount__controls--big' onClick={ () => onAdd(initialValue) } disabled={ stock==0 }>
				<div className='itemCount__controls--big__add'>
					<span class="material-icons-outlined">shopping_cart</span>
					<span>AGREGAR</span>
				</div>
			</button>
		</div>
	)
}

export default ItemCount