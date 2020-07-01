import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

import { PrayrIntentionItem, PrayerIntentionItem } from './PrayerIntentionItem';

export const PrayerIntetionsPreview = () => {
  const { prayerIntentions, getPrayers } = useContext(GlobalContext);

  useEffect(() => {
    getPrayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (prayerIntentions.length === 0) {
    return (
      <div className='mtb-20 grid-box'>
        <section className='text-center'>
          <h3>No prayers available.</h3>
        </section>
      </div>
    );
  }

  return (
    <div className='mtb-20 grid-box '>
      <section className='text-center'>
        {prayerIntentions.length <= 3 ? (
          ''
        ) : (
          <Link className='view-all-button' to='view-all-prayer-intentions'>
            VIEW ALL {prayerIntentions.length}
          </Link>
        )}
      </section>
      <div className='column-flex'>
        {prayerIntentions.slice(0, 3).map((prayerIntentionItem) => (
          <PrayerIntentionItem
            key={prayerIntentionItem._id}
            prayerIntentionItem={prayerIntentionItem}
          />
        ))}
      </div>
    </div>
  );
};
