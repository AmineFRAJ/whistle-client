import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMatches, filterLeagueMatches } from '../JS/actions/matchActions';
import LeagueTable from '../components/LeagueTable';
import Spinner from '../components/Spinner';

const Ligue1 = () => {
  const dispatch = useDispatch();

  const { matches, loading, error } = useSelector((state) => state.match);

  useEffect(() => { dispatch(clearMatches());
    dispatch(filterLeagueMatches("Ligue 1"));
  }, [dispatch]);

  return (
    <div className="w-full md:w-[1200px] mx-auto px-4">
      <h1 className="text-xl font-bold text-teal-400 mb-4">Ligue 1 Matches</h1>

      {loading && <p className="flex justify-center items-center h-[300px]"><Spinner/></p>}
      {error && <p className="text-red-400">❌ {error}</p>}

      {matches.length === 0 && !loading ? (
        <p className="text-gray-400">No matches found.</p>
      ) : (
        matches.map((data) => (
          <div key={data.id}>
            <LeagueTable data={data} />
          </div>
        ))
      )}
    </div>
  );
};

export default Ligue1;
