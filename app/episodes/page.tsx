'use client';

import { CharactersList, NoCharacters, SideBar } from '@/components';
import { useGetEpisodeQuery } from '../../core/types';
import Loader from '../../components/Loader';
import { FC } from 'react';
import { useAppSelector } from '../../redux/store';

const EpisodesPage: FC = ({}) => {
  const {
    filters: { episode },
  } = useAppSelector((state) => state.charactersSlice);

  const { data, loading } = useGetEpisodeQuery({
    variables: { episodeId: episode },
  });

  // const { data, loading } = useGetEpisodesQuery({
  //   variables: { filter: { name: text, episode: episode }, page: page },
  // });

  if (loading) return <Loader />;
  if (!data) {
    return <NoCharacters />;
  }
  console.log(data);

  return (
    <div>
      <div className="flex justify-center gap-9 pt-[50px] mx-auto my-0 max-w-[1500px]">
        <SideBar episodeName={data.episode?.name} episodes={true} />
        <CharactersList episodes={data.episode} />
      </div>
    </div>
  );
};

export default EpisodesPage;
