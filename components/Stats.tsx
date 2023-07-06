import { FC } from 'react';
import { Character } from '../graphql/types';
import { PiGenderIntersexFill } from 'react-icons/pi';
import { GrStatusInfo } from 'react-icons/gr';

interface StatsProps extends Character {}

const Stats: FC<StatsProps> = ({ species, gender, origin }) => {
  return (
    <section className="p-6 my-6 ">
      <div className="container grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2 xl:grid-cols-2">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
            <PiGenderIntersexFill size={50} />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold">Gender</p>
            <p className="capitalize">{gender}</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <GrStatusInfo size={40} />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold ">Status</p>
            <p className="capitalize">{species}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
