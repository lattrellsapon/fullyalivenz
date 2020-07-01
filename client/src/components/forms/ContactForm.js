import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const ContactForm = () => {
  const [userFullName, setUserFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const { sendEmail } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      userFullName,
      userEmail,
      userMessage,
    };

    sendEmail(newContact);
    setUserFullName('');
    setUserEmail('');
    setUserMessage('');
  };
  return (
    <div>
      <form className='contact-form' onSubmit={onSubmit}>
        <label htmlFor='contact-name' className='contact-block '>
          Name:{' '}
        </label>
        <input
          type='text'
          className='contact-block mb-20 contact-name'
          value={userFullName}
          onChange={(e) => {
            setUserFullName(e.target.value);
          }}
        />
        <label htmlFor='contact-email' className='contact-block '>
          Email:{' '}
        </label>
        <input
          type='email'
          className='contact-block mb-20 contact-email'
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <label htmlFor='contact-message' className='contact-block '>
          Message:{' '}
        </label>
        <textarea
          name='contact-message'
          className='contact-block mb-20 contact-message'
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        ></textarea>
        <input
          type='submit'
          value='SUBMIT'
          className='contact-block mtb-20 contact-submit-button'
        />
      </form>
    </div>
  );
};
