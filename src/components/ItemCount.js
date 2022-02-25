import React from 'react'
import { useEffect, useState } from 'react'
import './ItemCount.scss'

const ItemCount = (props) => {
	//const {propStock, propInitial} = props;
	//const {stock, initial} = props;
	//console.log(props)

	const [state, setState] = useState( props )
	
	const substractItem = () => {
		if (state.initial > 1)
		setState({ ...state, initial: state.initial - 1 })
	}
	const addItem = () => {
		if (state.initial < state.stock)
		setState({ ...state, initial: state.initial + 1 })
	}
	console.log(state)

	return (
		<div className='itemCount'>
			<div>
				<button onClick={ substractItem }>-</button>
				<span>{ state.initial }</span>
				<button onClick={ addItem }>+</button>
			</div>
			<button onClick={ () => state.onAdd(state.initial) } disabled={ state.stock==0 }>Agregar al carrito </button>
		</div>
	)
}

export default ItemCount