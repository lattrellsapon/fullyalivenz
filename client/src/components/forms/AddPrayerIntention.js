import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

export const AddPrayerIntention = () => {
  const [name, setName] = useState('');
  const [prayerIntention, setPrayerIntention] = useState('');

  const { addPrayer } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newPrayer = {
      name: name === '' ? 'Anoynymous' : name,
      prayerIntention,
    };

    addPrayer(newPrayer);
    setName('');
    setPrayerIntention('');
  };

  return (
    <div className='mtb-20 grid-box'>
      <form className='mtb-20' onSubmit={onSubmit}>
        <label htmlFor='name' className='add-prayer-block'>
          Name:{' '}
        </label>
        <input
          type='text'
          className='username add-prayer-block'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder='Enter your name or stay anonymous'
        />
        <label htmlFor='prayer-intention' className='add-prayer-block'>
          Prayer:{' '}
        </label>
        <textarea
          className='add-prayer-block prayer-intention-textarea'
          name='prayer-intention'
          value={prayerIntention}
          onChange={(e) => {
            setPrayerIntention(e.target.value);
          }}
          placeholder='Enter your prayer here'
          required
        ></textarea>
        <input
          type='submit'
          value='ADD'
          className='add-prayer-block add-prayer-button'
        />
      </form>
      <section className="add-prayer-blurb">
        <p className='mtb-20'>
          You can also{' '}
          <Link to='contact-us' className='send-us-button'>
            {' '}
            send us{' '}
          </Link>{' '}
          your personal prayers.
        </p>
      </section>
    </div>
  );
};
