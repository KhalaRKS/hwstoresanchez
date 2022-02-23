import React from 'react'
import ProductBox from './ProductBox'

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
const CreateBoxes = (props) => {
	let content = [];
	for (let i = 0; i < parseInt(props.q); i++) { 
		content.push( <ProductBox /> ) 
	} 
	return content
}

export default ItemListContainer