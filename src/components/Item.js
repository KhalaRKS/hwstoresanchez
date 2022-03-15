import React, { useState } from 'react'
import { useNavigate, Navigate, useLocation, Link } from 'react-router-dom'
import './Item.scss'

const Item = (props) => {
	const navigate = useNavigate()
	let location = useLocation()
	const click = () => { navigate(`/product/${props.id}`) }
	
	return (
		<article className='card card-shadow'>
			<h2>{props.title}</h2>
			<img src={ '/pictures/' + props.pictureUrl  } />
			<span>stock: <b>{props.stock}</b></span>
			<button onClick={ click }>DETALLES</button>
			{//<Link to={}>DETALLES</Link>
}
		</article>
	)
}

export default Item