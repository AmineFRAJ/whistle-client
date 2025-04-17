import React from 'react';

const Matches = ({ data }) => {
  const time = new Date(data.utcDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className='grid grid-cols-3'>
      <div className='w-full flex items-center'>
        <img src={data.homeTeam.crest} alt={data.homeTeam.name} className='w-[20px] h-[20px] mr-2' />
        <p className='text-sm'>{data.homeTeam.name}</p>
      </div>

      <div className='px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md'>
        {data.status === 'FINISHED' ? (
          <p className='py-1 text-teal-400 text-xs'>
            {data.score.fullTime.home} : {data.score.fullTime.away}
          </p>
        ) : (
          <p className='py-1 text-teal-400 text-xs'>{time}</p>
        )}
      </div>

      <div className='w-full flex items-center justify-end'>
        <p className='text-sm text-right'>{data.awayTeam.name}</p>
        <img src={data.awayTeam.crest} alt={data.awayTeam.name} className='w-[20px] h-[20px] ml-2' />
      </div>
    </div>
  );
};

export default Matches;
