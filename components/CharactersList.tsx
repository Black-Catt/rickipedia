'use client';

import styled from '@emotion/styled';
import { FC, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { Character, Episode, Location } from '@/core/types';
import Link from 'next/link';
import {
  filterCharacters,
  loadCharacters,
  sortCharacters,
} from '@/redux/features/charactersSlice';
import { useGetCharactersQuery } from '../core/types';
import { BasicPagination, Loader, NoCharacters } from './index';

interface CharactersListProps {
  episode?: Episode;
  pagination?: boolean;
  location?: Location;
}

const CharactersList: FC<CharactersListProps> = ({
  episode,
  pagination = true,
  location,
}) => {
  const dispatch = useAppDispatch();

  const {
    filters: { gender, status, text, species },
    page,
  } = useAppSelector((state) => state.characters);

  const { data, loading } = useGetCharactersQuery({
    variables: {
      filter: { gender: gender, status: status, name: text, species: species },
      page: page,
    },
  });

  useEffect(() => {
    if (!loading && data && data.characters) {
      dispatch(loadCharacters(data.characters.results));
    }
    if (episode) {
      dispatch(loadCharacters(episode.characters));
    }
    if (location) {
      dispatch(loadCharacters(location.residents));
    }
  }, [data, episode, location]);

  const { filters, sort } = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(filterCharacters());
    dispatch(sortCharacters());
  }, [filters, sort]);

  const { filtered_characters: characters } = useAppSelector(
    (state) => state.characters
  );

  if (loading) return <Loader />;
  if (
    !data ||
    !data.characters ||
    !data.characters.results ||
    !characters.length
  ) {
    return <NoCharacters />;
  }

  return (
    <div className="max-w-7xl">
      <GridContainer>
        {characters?.map((character: Character) => (
          <Link key={character.id} href={`/character/${character.id}`}>
            <CharacterCard
              image={character.image}
              name={character.name}
              type={character.type}
              location={character.location}
              status={character.status}
            />
          </Link>
        ))}
      </GridContainer>
      {pagination && <BasicPagination pages={data.characters.info?.pages} />}
    </div>
  );
};

export default CharactersList;

const GridContainer = styled.section`
  margin-bottom: 50px;
  display: grid;
  gap: 2rem 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  width: 100%;
  max-width: 1280px;
`;
