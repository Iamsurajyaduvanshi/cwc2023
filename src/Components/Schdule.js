import React from 'react';
import { parse } from 'date-fns';
import data from './data.json';
import teamData from './Team.js'; // Import the teamData array

function Schdule() {
  const formatDate = (dateString) => {
    const parsedDate = parse(dateString, 'dd/MM/yyyy HH:mm', new Date());
    return parsedDate.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  return (
    <div className='sc'><h1 style={{margin :'12px 120px'}}>Schedule of CWC 2023</h1>
      <ul className='sc-2'>
        {data.map((match, index) => (
          <div key={index} className='sc-3'>
            <div>
              <p>Date: {formatDate(match.date)}</p>
            </div>
            <div>
              <div>
                <p>Match {index + 1}</p>
                <img
                  src={teamData.find((team) => team.name === match.home)?.image}
                  alt={match.home}
                  style={{ width: '20px', height: '20px', borderBox: 'black' }}
                />
                <span>{match.home}</span>
              </div>

              <div>
                <img
                  src={teamData.find((team) => team.name === match.away)?.image}
                  alt={match.away}
                  style={{ width: '20px', height: '20px', border: 'black' }}
                />
                <span>{match.away}</span>
              </div>
            </div>
            <p>Location: {match.location}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Schdule;
