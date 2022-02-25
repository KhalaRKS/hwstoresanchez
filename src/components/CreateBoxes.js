import React from 'react'
import ProductBox from './ProductBox'

const CreateBoxes = (props) => {
	let content = [];
	for (let i = 0; i < parseInt(props.q); i++) { 
		content.push( <ProductBox key={i} /> ) 
	} 
	return content
}

export default CreateBoxes