import { useNavigate } from 'react-router-dom'
import './Item.scss'

const Item = (props) => {
	const navigate = useNavigate()
	const click = () => { navigate(`/product/${props.id}`) }
	
	return (
		<article className='card card-shadow'>
			<h2>{props.title}</h2>
			<img src={ '/pictures/' + props.pictureUrl  } />
			<span>stock: <b>{props.stock}</b></span>
			<span className='price'>$<b>{Intl.NumberFormat('es-AR').format(props.price)}</b></span>
			<button onClick={ click }>DETALLES</button>
		</article>
	)
}

export default Item