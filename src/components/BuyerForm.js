import React from 'react';

const BuyerForm = ({endStep}) => {
  return (
    <form className='buyer' onSubmit={e => endStep(e)}>
      <div className='row'>
        <label className='name'>Nombre</label>
        <label className='lastname'>Apellido</label>
        <label className='phone'>Teléfono</label>
        <label className='mail'>Mail</label>
      </div>
      <div className='row'>
        <input className='name' type='text' pattern='[A-Za-z]*' maxLength='25' placeholder='Juan' required/>
        <input className='lastname' type='text' pattern='[A-Za-z]*' maxLength='25' placeholder='Perez' required/>
        <input className='phone' type='text' pattern='[0-9]*' maxLength='10' placeholder='1150000000' required/>
        <input className='mail' type='email' placeholder='mail@coderhouse.com' required/>
      </div>
			<div className='row'>
				<button>COMPRAR</button>
			</div>
    </form>
  );
};

export default BuyerForm;
