import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
	//const cat = useParams() //|| 'HOME'
	const cat = 'CATEGORÍAS'
  return (
    <header>
      <div className='container__nav'>
        <h1>
          <Link to='/'>hwSTORE</Link>
        </h1>
        <p className='moto'>Todo lo que buscas, en un solo lugar</p>
      </div>
      <nav>
        <ul className='navbar-nav'>
					<li className='nav-item dropdown'>
						<span className='catname'>{cat}</span>
						<div class="dropbtn">
  						<div class="dropdown-content">
    						<NavLink className='nav-link' to='/category/samsung'>Samsung</NavLink>
    						<NavLink className='nav-link' to='/category/iphone'>iPhone</NavLink>
    						<NavLink className='nav-link' to='/category/motorola'>Motorola</NavLink>
  						</div>
						</div>
					</li>
          <li className='nav-item cartNav'>
						<NavLink className='nav-link' data-text='X' to='cart'>
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
