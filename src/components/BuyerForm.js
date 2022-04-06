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
        <input className='name' type='text' maxLength='25' placeholder='Juan' />
        <input className='lastname' type='text' maxLength='25' placeholder='Perez' />
        <input className='phone' type='text' maxLength='10' placeholder='1150000000' />
        <input className='mail' type='text' placeholder='mail@coderhouse.com'/>
      </div>
			<div className='row'>
				<button>COMPRAR</button>
			</div>
    </form>
  );
};

export default BuyerForm;
