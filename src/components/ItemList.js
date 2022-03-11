import React from 'react'
import Item from './Item';

const ItemList = (props) => {

	console.log(props)
	return (
		<>{
			props.products.map((product, index) => <Item {...product} key={index} />)
		}</>
	)
}

export default ItemList