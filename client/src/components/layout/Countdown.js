import React, { useState, useEffect } from 'react';

export const Countdown = () => {
  let dayOfEvent = new Date('July 18, 2020 18:00:00').getTime();

  //   const startTime = new Date('May 09, 2020 18:45:00').getTime();
  //   const endTime = new Date('May 09, 2020 20:40:00').getTime();

  const currentTime = new Date();

  //   const [dayOfEvent, sayDayOfEvent] = useState()
  const [days, setDays] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [seconds, setSeconds] = useState(undefined);
  const [isTimePassed, setIsTimePassed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date().getTime();

      let distance = dayOfEvent - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsTimePassed(true);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  }, []);

  return (
    <div className='countdown'>
      <div className='countdown-grid'>
        <div className='grid-box'>
          <h1>{days}</h1>
        </div>
        <div className='grid-box '>
          <h1>{hours}</h1>
        </div>
        <div className='grid-box'>
          <h1>{minutes}</h1>
        </div>
        <div className='grid-box'>
          <h1>{seconds}</h1>
        </div>
        <div className='grid-box time'>
          <p>DAYS</p>
        </div>
        <div className='grid-box time '>
          <p>HOURS</p>
        </div>
        <div className='grid-box time '>
          <p>MINUTES</p>
        </div>
        <div className='grid-box time'>
          <p>SECONDS</p>
        </div>
      </div>
    </div>
  );
};
