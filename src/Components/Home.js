import React, { useState, useEffect } from 'react';
import { parse, differenceInSeconds } from 'date-fns';
import data from './data.json';
import teamData from './Team.js';
import './compo.css';

const Home = () => {
  const [nextMatch, setNextMatch] = useState(null);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const currentTime = new Date().getTime();

    const nextMatchObj = data.find((match) => {
      const matchDateTime = parse(match.date, 'dd/MM/yyyy HH:mm', new Date());
      return matchDateTime > currentTime;
    });

    setNextMatch(nextMatchObj);
  }, []);

  useEffect(() => {
    if (nextMatch) {
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [nextMatch]);

  const updateCountdown = () => {
    const currentTime = new Date().getTime();
    const matchDateTime = parse(nextMatch.date, 'dd/MM/yyyy HH:mm', new Date());

    const timeRemainingInSeconds = differenceInSeconds(matchDateTime, currentTime);
    if (timeRemainingInSeconds <= 0) {
      setCountdown('Match is live!');
    } else {
      const days = Math.floor(timeRemainingInSeconds / (60 * 60 * 24));
      const hours = Math.floor((timeRemainingInSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((timeRemainingInSeconds % (60 * 60)) / 60);
      const seconds = timeRemainingInSeconds % 60;
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
  };

  const homeTeam = teamData.find((team) => team.name === nextMatch?.home);
  const awayTeam = teamData.find((team) => team.name === nextMatch?.away);

  return (
    <div>
      {nextMatch ? (
        <div className='home-1'>
          <h2>Next Match Countdown</h2>
          <p className='date'>{nextMatch.date}</p>
          <p className='flex'>
          {homeTeam && (
              <div className='team-1'>
                <img src={homeTeam.image} alt={homeTeam.name} style={{ width: '200px', height: '200px' }} />
                <br></br> <span>{homeTeam.name}</span>
              </div>
            )} VS {awayTeam && (
              <div className='team-1'>
                <img src={awayTeam.image} alt={awayTeam.name} style={{ width: '200px', height: '200px' }} />
                <br></br><span>{awayTeam.name}</span>
              </div>
            )}
          </p>
          <p style={{color:'blue'}}>Match Start in :{countdown}</p>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
