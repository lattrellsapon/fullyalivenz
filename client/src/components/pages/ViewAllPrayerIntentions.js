import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PrayerIntentionItem } from '../prayerintentions/PrayerIntentionItem';
import { GlobalContext } from '../../context/GlobalState';

export const ViewAllPrayerIntentions = () => {
  const { prayerIntentions, getPrayers } = useContext(GlobalContext);

  useEffect(() => {
    getPrayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='min-height'>
      <section className='text-center'>
        <h3>Lord may you please hear our prayers.</h3>
      </section>
      <div>
        <Link className='back-button' to='/prayer-intentions'>
          BACK
        </Link>
      </div>
      <div className='three-grid'>
        {prayerIntentions.map((prayerIntentionItem) => (
          <PrayerIntentionItem
            key={prayerIntentionItem._id}
            prayerIntentionItem={prayerIntentionItem}
          />
        ))}
      </div>
    </div>
  );
};
