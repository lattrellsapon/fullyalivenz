import React from 'react';

export const PrayerIntentionItem = ({ prayerIntentionItem }) => {
  return (
    <div className='prayer-item'>
      <div className='prayer-item-content mtb-20'>
        <h3 className='mtb-10'>{prayerIntentionItem.name}</h3>
        <p className='mtb-10'>{prayerIntentionItem.prayerIntention}</p>
      </div>
    </div>
  );
};
