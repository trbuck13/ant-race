import Button from '@/components/Button';
import StackedList, { StackedListRow } from '@/components/StackedList';
import { useEffect, useState } from 'react';
import data from '@/data.json';
import { generateAntWinLikelihoodCalculator } from '@/util/likelihood-util';

type Ant = {
  name: string;
  length: number;
  color: string;
  weight: number;
  likelihood: number | null;
};

const Leaderboard = () => {
  const [raceStatus, setRaceStatus] = useState('Upcoming');
  const [ants, setAnts] = useState<Ant[]>([]);

  const setLikelihood = (ant, value) => {
    const otherAnts = ants.filter((x) => x.name !== ant.name);
    const updatedAnt = ants.find((x) => x.name == ant.name);
    updatedAnt.likelihood = value;
    const sortedAnts = [...otherAnts, updatedAnt].sort((a, b) => {
      return b.likelihood - a.likelihood;
    });
    setAnts(sortedAnts);
  };

  const handleStartRace = () => {
    setRaceStatus('Active');
    ants.map((ant) => {
      const initCalc = generateAntWinLikelihoodCalculator();
      initCalc((value) => {
        setLikelihood(ant, value);
      });
    });
  };

  useEffect(() => {
    setAnts(
      data?.ants.map((x) => {
        return { ...x, likelihood: null };
      })
    );
  }, []);

  useEffect(() => {
    const allCalculationsComplete = ants.filter((x) => x.likelihood);
    ants.length > 0 && allCalculationsComplete.length === ants.length && setRaceStatus('Complete');
  }, [ants]);
  return (
    <div className="green-gradiant min-h-screen px-4 pt-24">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto mb-4 w-full items-center rounded-2xl bg-white p-6 tracking-wide sm:flex sm:justify-between">
          <div>
            <div className=" text-sm font-semibold uppercase leading-3 tracking-wide text-gray-400">
              Next Race:
            </div>
            <div className="text-3xl font-bold text-gray-600">{raceStatus}</div>
          </div>
          <Button primary onClick={() => handleStartRace()} disabled={raceStatus === 'Active'}>
            Start Race
          </Button>
        </div>
        <div className="mx-auto w-full rounded-2xl bg-white p-12">
          <StackedList>
            {ants.map((ant) => (
              <StackedListRow
                primary={ant.name}
                secondary={`Weight: ${ant.weight} - Length: ${ant.length}`}
                color={ant.color}
                rank={
                  (ant.likelihood && ant.likelihood) ||
                  (raceStatus === 'Active' && !ant.likelihood && 'pending') ||
                  (raceStatus === 'Upcoming' && !ant.likelihood && '-')
                }
              />
            ))}
          </StackedList>
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
