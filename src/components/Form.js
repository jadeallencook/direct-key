import React from 'react';
import './Form.scss';

function Form() {
    return (
        <form>
            <div>
                <input type='text' placeholder='Fullname' required/>
                <input type='text' placeholder='Job Title'/>
                <input type='email' placeholder='Email' required/>
                <input type='tel' placeholder='Phone'/>
                <input type='text' placeholder='Hotel Brand' required/>
                <input type='text' placeholder='Property Name' required/>
                <input type='text' placeholder='Location' required/>
                <input type='number' min='0' placeholder='Number of Rooms' required/>
                <input id='existingCustomer' type='checkbox' />
                <label for='existingCustomer'>I’M AN EXISTING ONITY CUSTOMER</label>
                <input id='contactSalesRep' type='checkbox' />
                <label for='contactSalesRep'>PLEASE HAVE A SALES REPRESENTATIVE CONTACT ME</label>
                <input id='emailUpdates' type='checkbox' />
                <label for='emailUpdates'>I WOULD LIKE TO RECEIVE EMAIL UPDATES FROM ONITY</label>
                <span>reCAPTCHA</span>
                <input type='Submit' value='Post'/>
            </div>
        </form>
      );
}

export default Form;