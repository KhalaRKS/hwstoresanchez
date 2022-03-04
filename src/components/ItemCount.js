import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { useEffect, useState } from 'react'
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
			<div>
				<button onClick={ substractItem }>-</button>
				<span>{ initialValue }</span>
				<button onClick={ addItem }>+</button>
			</div>
			<button onClick={ () => onAdd(initialValue) } disabled={ stock==0 }>Agregar al carrito </button>
		</div>
	)
}

export default ItemCount