import { useState } from 'react'

const Checkout = ({endStep}) => {

	const [valid, setValid] = useState(false)

	const validateForm = (e) => {
		setValid( e.target.form[0].validity.valid & e.target.form[1].validity.valid & e.target.form[2].validity.valid & (e.target.form[3].value == e.target.form[4].value) & e.target.form[3].validity.valid & e.target.form[4].validity.valid)
	}

  return (
    <form className='buyer' onSubmit={e => endStep(e)} onChange={e => validateForm(e)}>
      <div className='row'>
        <label className='name'>Nombre</label>
        <label className='lastname'>Apellido</label>
        <label className='phone'>Teléfono</label>
        <label className='mail'>Mail</label>
        <label className='mail'>Reingresa tu mail</label>
      </div>
      <div className='row'>
        <input className='name' type='text' pattern='[A-Za-z]+' maxLength='25' placeholder='Juan' required/>
        <input className='lastname' type='text' pattern='[A-Za-z]+' maxLength='25' placeholder='Perez' required/>
        <input className='phone' type='text' pattern='[0-9]{10}' maxLength='10' placeholder='1150000000' required/>
        <input className='mail' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' placeholder='mail@coderhouse.com' required/>
        <input className='mail' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' placeholder='mail@coderhouse.com' required/>
      </div>
			<div className='row'>
				<button disabled={!valid}>COMPRAR</button>
			</div>
    </form>
  )
}

export default Checkout
