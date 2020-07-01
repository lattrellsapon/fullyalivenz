import React from 'react';

import { ContactForm } from '../forms/ContactForm';

export const ContactUs = () => {
  return (
    <div className='min-height'>
      <section className='text-center'>
        <h1 className='mtb-20'>Get in touch</h1>
      </section>
      <ContactForm />
    </div>
  );
};
