'use client';

import { FC } from 'react';
import { useGetLocationQuery } from '../../core/types';
import { SideBar, NoCharacters } from '@/components';
import CharactersList from '../../components/CharactersList';
import Loader from '../../components/Loader';
import { useAppSelector } from '../../redux/store';

interface LocationPageProps {}

const LocationPage: FC<LocationPageProps> = ({}) => {
  const {
    filters: { locationId },
  } = useAppSelector((state) => state.charactersSlice);

  const { data, loading } = useGetLocationQuery({
    variables: { locationId: locationId },
  });

  if (loading) return <Loader />;
  if (!data) {
    return <NoCharacters />;
  }

  return (
    <div>
      <div className="flex justify-center gap-9 pt-[50px] mx-auto my-0 max-w-[1500px]">
        <SideBar
          itemName={data.location?.name}
          items={true}
          itemNameId="locationId"
        />
        <CharactersList location={data.location!} pagination={false} />
      </div>
    </div>
  );
};

export default LocationPage;
