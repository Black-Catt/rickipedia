import { FC } from 'react';
import { Episode } from '../core/types';

interface InfoTableProps {
  episode?: (Episode | null)[];
}

const InfoTable: FC<InfoTableProps> = ({ episode }) => {
  return (
    <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
      <h2 className="mb-3 text-2xl font-semibold leadi">Episodes</h2>
      <div className="overflow-y-auto max-h-72">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg dark:bg-gray-700">
            <tr className="text-right">
              <th title="Ranking" className="p-3 text-left">
                Episode
              </th>
              <th title="Team name" className="p-3 text-left">
                Name
              </th>
              <th title="Wins" className="p-3">
                Air date
              </th>
            </tr>
          </thead>
          <tbody>
            {episode?.map((eps, i) => (
              <tr
                key={i}
                className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800"
              >
                <td className="px-3 py-2 text-left">
                  <span>{eps?.episode}</span>
                </td>
                <td className="px-3 py-2 text-left">
                  <span>{eps?.name}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{eps?.air_date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoTable;
