import React from 'react';
import './Header.scss';
import DoorsImg from '../assets/cityscape-background.png';

function Header() {
  return (
    <header>
      <div>
        100 MILLION Reasons to Choose <span>DirectKey&trade;</span> Technology
      </div>
      <img src={DoorsImg} alt='directkey door header' />
      <h1>
        100 Million
        <span>...DOOR OPENINGS AND COUNTING.</span>
      </h1>
      <h3>DirectKey&trade; Mobile Access Solution</h3>
      <p>
        100 Million. That’s how many times DirectKey has unlocked doors in the
        past 5 years alone, across 2000 cities globally. Every one of those
        doors is a cause for confidence for taking your property into the
        contactless era.
      </p>
      <p>
        DirectKey allows guests to use Bluetooth® to unlock the door
        while approaching it, without touching a phone to the reader - just
        secure and smooth entry into spaces across the property from the parking
        garage, to elevators, to guest rooms and beyond.
      </p>
    </header>
  );
}

export default Header;
