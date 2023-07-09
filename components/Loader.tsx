import { FC } from 'react';
import mortyLoader from '../public/assets/morty-loader.gif';
import Image from 'next/image';

const Loader: FC = () => {
  let circleCommonClasses = 'h-6 w-6 bg-current   rounded-full';
  return (
    <div className="flex-col flex justify-center h-screen w-screen items-center gap-y-6">
      <Image src={mortyLoader} alt="Morty loader" />
      <div className="flex  justify-center items-center">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
};

export default Loader;
