import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMatches,
  getFinishedMatches,
  clearMatches,
} from "../JS/actions/matchActions";
import Status from "../components/Status";
import Spinner from "../components/Spinner";

const Home = () => {
  const dispatch = useDispatch();

  const matchState = useSelector((state) => state.match || {});
  const {
    matches = [],
    finishedMatches = [],
    loading = false,
    loaded = false,
    loadedFinished = false,
  } = matchState;

  useEffect(() => {
    dispatch(clearMatches());
    dispatch(getMatches());
    dispatch(getFinishedMatches());
  }, [dispatch]);

  const dateConvert = new Date().toDateString();
  const allLoaded = loaded && loadedFinished;
  return (
    <section className="w-full md:w-[1200px] mx-auto px-4">
    <div className="flex justify-between items-center mb-4 md:mb-2">
      <h1 className="text-md md:text-xl font-bold">MATCHES</h1>
      <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-sm">
        <p>{dateConvert}</p>
      </div>
    </div>

    {loading ? (
      <div className="flex justify-center items-center h-[300px]">
        <Spinner />
      </div>
    ) : allLoaded && matches.length === 0 && finishedMatches.length === 0 ? (
      <p className="text-red-400">⚠️ No matches found for today</p>
    ) : (
      <Status matchesList={matches} matchesListFinished={finishedMatches} />
    )}
  </section>
  );
};

export default Home;
