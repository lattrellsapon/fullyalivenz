import React from 'react';

// Countdown
import { Countdown } from '../layout/Countdown';

export const Home = () => {
  return (
    <div className=' min-height text-center homepage'>
      <div className='homepage-content'>
        <div className='inner-background'>
          <div className='anchor-verse'>
            <h3 className='mtb-10'>
              "But just as he who called you is holy, so be holy in all you do"
            </h3>
            <h4 className='mtb-10'>- 1 PETER 1:15</h4>
          </div>
          <div className='register-content mtb-20'>
            <a
              href='http://couplesforchrist.nz/registration/SFCFullyAlive2020.html'
              target='_blank'
              className='register-button '
            >
              REGISTER HERE
            </a>
          </div>
          <Countdown />
          <div className='event-details'>
            <h1>SFC NATIONAL CONFERENCE</h1>
            <h3>Online Event</h3>
            <h3>July 18 - July 19 2020</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
