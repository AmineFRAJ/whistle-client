import React, { useState } from 'react';
import LeagueTable from './LeagueTable';

const Status = ({ matchesList, matchesListFinished }) => {
  const [statusMatch, setStatusMatch] = useState("TODAY");

  return (
    <div>
      <div className='flex space-x-4 mb-2 md:mb-4'>
        <button onClick={() => setStatusMatch("TODAY")} className={`px-2 py-1 text-primary text-xs md:text-sm rounded-md ${statusMatch === 'TODAY' ? 'bg-teal-400 font-semibold' : 'bg-slate-500'}`}>today</button>
        <button onClick={() => setStatusMatch("FINISHED")} className={`px-2 py-1 text-primary text-xs md:text-sm rounded-md ${statusMatch === 'FINISHED' ? 'bg-teal-400 font-semibold' : 'bg-slate-500'}`}>finished</button>
      </div>

      <div className='w-full'>
        {statusMatch === "TODAY" &&
          matchesList.map((data) =>
            data.status === "TIMED" ? <LeagueTable key={data.id} data={data} /> : null
          )}

        {statusMatch === "FINISHED" &&
          <>
            {matchesList.map((data) =>
              data.status === "FINISHED" ? <LeagueTable key={data.id} data={data} /> : null
            )}
            {matchesListFinished.map((data) => (
              <LeagueTable key={data.id} data={data} />
            ))}
          </>
        }
      </div>
    </div>
  );
};

export default Status;
