import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import CartWidget from './CartWidget';

const NavBar = () => {
	return (<>
		<header>
			<div className="container__nav">
			<h1>
			<Link to="/">hwSTORE</Link>
			</h1>
				<p className="moto">Todo lo que buscas, en un solo lugar</p>
			</div>
			<nav>
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" data-text="Samsung" to="/category/samsung">Samsung</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" data-text="iPhone" to="/category/iphone">iPhone</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" data-text="Motorola" to='/category/motorola'>Motorola</NavLink>
					</li>
					<li className="nav-item">
					<NavLink className="nav-link" data-text="X" to='cart'><CartWidget /></NavLink>
					</li>
				</ul>
			</nav>
		</header>
		</>
	)
}

export default NavBar;