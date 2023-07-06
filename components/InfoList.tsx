import { Character } from '@/graphql/types';
import { changeFirstLetter } from '@/utils/changeFirstLetter';
import { FC } from 'react';
import { Location, Maybe } from '../graphql/types';

interface InfoListProps {
  location: Maybe<Location> | undefined;
}

const InfoList: FC<InfoListProps> = ({ location }) => {
  return (
    <div>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {Object.entries(location || [])
          .flat()
          .map((el, i, arr) => {
            if (i % 2 === 0) {
              return (
                <li key={i} className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {changeFirstLetter(String(el), true)}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {changeFirstLetter(String(arr[i + 1]), true)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default InfoList;
