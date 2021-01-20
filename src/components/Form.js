import React, { useState } from 'react';
import './Form.scss';
import submitForm from '../api/submitForm';

function Form() {
  const [Name, setName] = useState(''),
    [Title, setTitle] = useState(''),
    [Email, setEmail] = useState(''),
    [phone, setPhone] = useState(),
    [hotel, setHotel] = useState(''),
    [property, setProperty] = useState(''),
    [location, setLocation] = useState(''),
    [rooms, setRooms] = useState(),
    [existing, setExisting] = useState(false),
    [contact, setContact] = useState(false),
    [subscribe, setSubscribe] = useState(false);

  return (
    <form>
      <input
        type='text'
        placeholder='Full Name'
        value={Name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Job Title'
        value={Title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <input
        type='email'
        placeholder='Email'
        value={Email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <input
        type='tel'
        placeholder='Phone'
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Hotel Brand'
        value={hotel}
        onChange={(event) => setHotel(event.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Property Name'
        value={property}
        onChange={(event) => setProperty(event.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Location'
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        required
      />
      <input
        type='number'
        min='0'
        placeholder='Number of Rooms'
        value={rooms}
        onChange={(event) => setRooms(event.target.value)}
        required
      />
      <br />
      <input
        id='existing'
        type='checkbox'
        value={existing}
        onChange={() => setExisting(!existing)}
      />
      <label htmlFor='existing'>I’M AN EXISTING ONITY CUSTOMER</label>
      <br />
      <input
        id='contact'
        type='checkbox'
        onChange={() => setContact(!contact)}
      />
      <label htmlFor='contact'>
        PLEASE HAVE A SALES REPRESENTATIVE CONTACT ME
      </label>
      <br />
      <input
        id='subscribe'
        type='checkbox'
        name='subscribe'
        value={subscribe}
        onChange={() => setSubscribe(!subscribe)}
      />
      <label htmlFor='subscribe'>
        I WOULD LIKE TO RECEIVE EMAIL UPDATES FROM ONITY
      </label>
      <div
        className='g-recaptcha'
        data-sitekey='6LfH828UAAAAAAojFmC0U0n3UXPEsWN5qVtAEhpk'
      ></div>
      <input
        type='submit'
        value='Post'
        onClick={(e) => {
          e.preventDefault();
          submitForm({
            Name,
            Title,
            Email,
            phone,
            hotel,
            property,
            location,
            number_of_rooms: rooms,
            existing_customer: existing,
            contact_me: contact,
            subscribe,
          }).then((data) => console.log(data));
        }}
      />
    </form>
  );
}

export default Form;
