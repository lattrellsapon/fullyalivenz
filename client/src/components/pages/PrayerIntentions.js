import React from 'react';

// Form
import { AddPrayerIntention } from '../forms/AddPrayerIntention';

// Prayer Intentions
import { PrayerIntetionsPreview } from '../prayerintentions/PrayerIntetionsPreview';

export const PrayerIntentions = () => {
  return (
    <div className='min-height'>
      <header className='text-center'>
        <h1>Prayer Intentions</h1>
        <p>How can we pray for you?</p>
      </header>
      <div className='two-grid'>
        <AddPrayerIntention />
        <PrayerIntetionsPreview />
      </div>
    </div>
  );
};
