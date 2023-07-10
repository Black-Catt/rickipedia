'use client';

import { CharactersList, NoCharacters, SideBar } from '@/components';
import { useGetEpisodeQuery } from '../../core/types';
import Loader from '../../components/Loader';
import { FC } from 'react';
import { useAppSelector } from '../../redux/store';

const EpisodesPage: FC = ({}) => {
  const {
    filters: { episodeId },
  } = useAppSelector((state) => state.charactersSlice);

  const { data, loading } = useGetEpisodeQuery({
    variables: { episodeId: episodeId },
  });

  if (loading) return <Loader />;
  if (!data) {
    return <NoCharacters />;
  }

  return (
    <div>
      <div className="flex justify-center gap-9 pt-[50px] mx-auto my-0 max-w-[1500px]">
        <SideBar
          itemName={data.episode?.name}
          items={true}
          itemNameId="episodeId"
        />
        <CharactersList episode={data.episode!} pagination={false} />
      </div>
    </div>
  );
};

export default EpisodesPage;
