import React from 'react'
import CreateBoxes from './CreateBoxes'

const ItemListContainer = (props) => {
	return (
		<main className='container'>
			<span className='greetings'>Hola <b>{props.nombre}</b>, estas son las ofertas del día!</span>
			<div className='showcase'>
				{ <CreateBoxes q='5' /> }
			</div>
		</main>
	)
}

export default ItemListContainer