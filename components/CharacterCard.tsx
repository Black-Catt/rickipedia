import { FC } from 'react';

import { Character } from '../graphql/types';
import Image from 'next/image';
import InfoList from './InfoList';

interface CharacterCard extends Character {
  single?: boolean;
}

const CharacterCard: FC<CharacterCard> = ({
  image,
  name,
  type,
  status,
  episode,
  location,
  single = false,
}) => {

  const noImage =
    'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
        <Image
          width={500}
          height={290}
          src={image ? image : noImage}
          alt={name || ''}
        />
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2 text-black">{name}</h1>
        </div>
        {single && (
          <div className="px-6">
            <InfoList location={location} />
          </div>
        )}
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{status}
          </span>
          {type && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{type}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
