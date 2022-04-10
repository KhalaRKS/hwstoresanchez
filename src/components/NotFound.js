import { Link } from 'react-router-dom'

const NotFound = ({id}) => {
	return (
		<div className='column center'>
			<b>No existe producto con id #{id}</b>
			<p><b><Link to='/'>Ir al inicio</Link></b></p>
		</div>
	)
}

export default NotFound