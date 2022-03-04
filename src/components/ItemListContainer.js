import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'


const productsFetched = [
	{
		id: 0,
		title: 'iPhone 11',
		description: 'Exercitation nisi voluptate aliqua officia eu incididunt dolor id sunt sunt proident.',
		price: 499,
		pictureUrl: 'iphone11-select-2019-family.jpg'
	},
	{ 
		id: 1,
		title: 'iPhone SE',
		description: 'iPhone SE en variedades de 64 y 128GB. Colores: negro, blanco y rojo',
		price: 399,
		pictureUrl: 'compare_iphone_se__ctt6b25kqxkm_large.jpg'
	},
	{
		id: 2,
		title: 'iPhone 12',
		description: 'Aliquip excepteur culpa aliquip Lorem voluptate excepteur nostrud tempor veniam sint magna.',
		price: 599,
		pictureUrl: 'compare_iphone_12__c71spndl2g02_large.jpg'
	},
	{
		id: 3,
		title: 'iPhone 13',
		description: 'Sunt proident sint cupidatat do sunt elit.',
		price: 699,
		pictureUrl: 'compare_iphone_13__wrfdzgtnv426_large.jpg'
	},
	{
		id: 4,
		title: 'iPhone 13 PRO',
		description: 'Lorem qui id amet dolor laborum duis exercitation esse pariatur sint aute dolor voluptate.',
		price: 999,
		pictureUrl: 'compare_iphone_13_pro__cn6f4jyk7r7m_large.jpg'
	}]


const ItemListContainer = (props) => {

	const [products, setProducts] = useState()

	useEffect(() => { 
		const request = new Promise((res, rej) => {
			setTimeout(() => { res(productsFetched) }, 2000)
		})
	
		request.then((result) => {
			setProducts(result)
		})	
	
	}, [])


	return (
		<main className='container'>
			<span className='greetings'>Hola <b>{props.nombre}</b>, estas son las ofertas del día!</span>
			<div className='showcase'>
				{	products && <ItemList products={ products } /> }
			</div>

		</main>
	)
}

export default ItemListContainer