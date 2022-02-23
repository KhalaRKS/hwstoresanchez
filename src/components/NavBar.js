import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
	return (<>
		<header>
			<div className="container">
			<h1>
				<a href="#">hwSTORE</a>
			</h1>
				<p className="moto">Todo lo que buscas, en un solo lugar</p>
			</div>
			<nav>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" data-text="HOME" href="#">HOME</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-text="PRODUCTOS" href="#">PRODUCTOS</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-text="CUENTA" href="#">CUENTA</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" data-text="X" href="#"><CartWidget /></a>
					</li>
				</ul>
			</nav>
		</header>
		</>
	)
}

export default NavBar;