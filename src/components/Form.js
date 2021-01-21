import React from 'react';
import './Form.scss';

function Form() {
  return (
    <form action='send-email.php' method='post'>
      <input name='name' type='text' placeholder='Full Name' required />
      <input name='job' type='text' placeholder='Job Title' required />
      <input name='email' type='email' placeholder='Email' required />
      <input name='phone' type='tel' placeholder='Phone' required />
      <input name='brand' type='text' placeholder='Hotel Brand' required />
      <input name='property' type='text' placeholder='Property Name' required />
      <input name='location' type='text' placeholder='Location' required />
      <input
        name='rooms'
        type='number'
        min='1'
        placeholder='Number of Rooms'
        required
      />
      <br />
      <input name='existing' id='existing' type='checkbox' />
      <label htmlFor='existing'>I’M AN EXISTING ONITY CUSTOMER</label>
      <br />
      <input name='contact' id='contact' type='checkbox' />
      <label htmlFor='contact'>
        PLEASE HAVE A SALES REPRESENTATIVE CONTACT ME
      </label>
      <br />
      <input id='subscribe' type='checkbox' name='subscribe' />
      <label htmlFor='subscribe'>
        I WOULD LIKE TO RECEIVE EMAIL UPDATES FROM ONITY
      </label>
      <input type='submit' value='Send' />
    </form>
  );
}

export default Form;
