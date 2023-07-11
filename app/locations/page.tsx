'use client';

import { FC } from 'react';
import { useGetLocationQuery } from '../../core/types';
import { SideBar, NoCharacters, withAuth } from '@/components';
import CharactersList from '../../components/CharactersList';
import Loader from '../../components/Loader';
import { useAppSelector } from '../../redux/store';
import toast from 'react-hot-toast';

interface LocationPageProps {}

const LocationPage: FC<LocationPageProps> = ({}) => {
  const {
    filters: { locationId },
  } = useAppSelector((state) => state.characters);

  const { data, loading , error } = useGetLocationQuery({
    variables: { locationId: locationId },
  });

  if (loading) return <Loader />;
  if (error) toast.error('An error ocurred');
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

export default withAuth(LocationPage);
