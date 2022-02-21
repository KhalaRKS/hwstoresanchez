import React from 'react'

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
						<a className="nav-link" title="HOME" href="#">HOME</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" title="OFERTAS" href="#">OFERTAS</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" title="CUENTA" href="#">CUENTA</a>
					</li>
				</ul>
			</nav>
		</header>
		</>
	)
}

export default NavBar;