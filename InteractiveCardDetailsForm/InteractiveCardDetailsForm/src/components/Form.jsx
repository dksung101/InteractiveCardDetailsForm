import React from 'react'

const Form = ({onNameChange, onCardNumChange, onMonthChange, onYrChange, onCvcChange, onSubmit}) => {

  return (
    <form>
      <div>
        <label>Cardholder Name</label>
        <input placeholder="Jane Appleseed" type="text" onChange={onNameChange}></input>
      </div>

      <div>
      <label>Card Number</label>
      <input placeholder="0000 0000 0000 0000" type="text" onChange={onCardNumChange} maxLength="16"></input>
      </div>

      <div className='card-details'>
          <div className='exp-date'>
              <label>Exp.Date (MM/YY)</label>
              <div className='exp-date-input'>
                  <input type="text" onChange={onMonthChange} maxLength="2"></input>
                  <input type="text" onChange={onYrChange} maxLength="2"></input>
              </div>
          </div>

          <div className='cvc'>
              <label>CVC</label>
              <input type="text" onChange={onCvcChange} maxLength="3"></input>
          </div>
      </div>
      
      <button type='submit' onClick={onSubmit}>Confirm</button>


    </form>
  )
}

export default Form