import React from 'react'
import ItemCount from './ItemCount'
import toast, { Toaster } from 'react-hot-toast';

import './ItemDetail.scss'

const ItemDetail = ({pictureUrl, title, description, price, stock, callBack }) => {

	const notify = () => toast.success('Producto agregado al carrito.');

	return (
		<article className='itemDetailBox nice-border shadow'>
			<div className='itemDetailBox__close' onClick={callBack} >
				<span className="material-icons-outlined">close</span>
			</div>
			<div className='frame'>
				<img src={ 'pictures/' + pictureUrl  } />
			</div>

			<section className='info'>
				<div className='info__title'>
					<h2>{title}</h2>
					<div className='info__title--overflow'>
						<p>{description}</p>
					</div>
				</div>
			
				<div className='info__price'>
					<div className='info__price__stock'>
						<h4>${price}</h4>
						{
							stock?
							<span className='info__price-stock'>STOCK DISPONIBLE: <b>{stock}</b></span>
							:
							<span className='info__price-nostock'>SIN STOCK</span>
						}
						
					</div>
					{<ItemCount stock={ stock } initial={1} onAdd={ notify } />	}
				</div>
				
			</section>
		</article>
	)
}

export default ItemDetail