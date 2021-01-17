import React, { useState } from 'react';
import './Form.scss';

function Form() {
    const [name, setName] = useState(''),
        [title, setTitle] = useState(''),
        [email, setEmail] = useState(''),
        [phone, setPhone] = useState(5555555555),
        [hotel, setHotel] = useState(''),
        [property, setProperty] = useState(''),
        [location, setLocation] = useState(''),
        [rooms, setRooms] = useState(0),
        [existing, setExisting] = useState(false),
        [contact, setContact] = useState(false),
        [subscribe, setSubscribe] = useState(false);

    return (
        <form>
            <div>
                <input type='text' placeholder='Fullname' onChange={event => setName(event.target.value)} required />
                <input type='text' placeholder='Job Title' onChange={event => setTitle(event.target.value)} />
                <input type='email' placeholder='Email' onChange={event => setEmail(event.target.value)} required />
                <input type='tel' placeholder='Phone' onChange={event => setPhone(event.target.value)} />
                <input type='text' placeholder='Hotel Brand' onChange={event => setHotel(event.target.value)} required />
                <input type='text' placeholder='Property Name' onChange={event => setProperty(event.target.value)} required />
                <input type='text' placeholder='Location' onChange={event => setLocation(event.target.value)} required />
                <input type='number' min='0' placeholder='Number of Rooms' onChange={event => setRooms(event.target.value)} required />
                <span>
                    <input id='existing' type='checkbox' onChange={event => setExisting(event.target.value)} />
                    <label htmlFor='existing'>I’M AN EXISTING ONITY CUSTOMER</label>
                </span>
                <span>
                    <input id='contact' type='checkbox' onChange={event => setContact(event.target.value)} />
                    <label htmlFor='contact'>PLEASE HAVE A SALES REPRESENTATIVE CONTACT ME</label>
                </span>
                <span>
                    <input id='subscribe' type='checkbox' onChange={event => setSubscribe(event.target.value)} />
                    <label htmlFor='subscribe'>I WOULD LIKE TO RECEIVE EMAIL UPDATES FROM ONITY</label>
                </span>
                <span>reCAPTCHA</span>
                <input type='submit' value='Post' onClick={console.log({
                    name: name,
                    title: title,
                    email: email,
                    phone: phone,
                    hotel: hotel,
                    property: property,
                    location: location,
                    number_of_rooms: rooms,
                    existing_customer: existing,
                    contact_me: contact,
                    subscribe: subscribe
                })} />
            </div>
        </form>
    );
}

export default Form;