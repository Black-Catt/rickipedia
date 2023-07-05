'use client';

import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import CharacterCard from './CharacterCard';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { Character } from '@/graphql/types';
import Link from 'next/link';
import {
  filterCharacters,
  loadCharacters,
  sortCharacters,
} from '@/redux/features/charactersSlice';
import { useGetCharactersQuery } from '../graphql/types';
import { BasicPagination, Loader, NoCharacters, SideBar } from './index';

const CharactersList: FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const {
    filters: { gender, status },
  } = useAppSelector((state) => state.charactersSlice);

  const { data, loading } = useGetCharactersQuery({
    variables: { filter: { gender: gender, status: status }, page: page },
  });

  useEffect(() => {
    if (!loading && data && data.characters) {
      dispatch(loadCharacters(data.characters.results));
    }
  }, [data]);

  const { filters, sort } = useAppSelector((state) => state.charactersSlice);

  useEffect(() => {
    dispatch(filterCharacters());
    dispatch(sortCharacters());
  }, [filters, sort]);

  const { filtered_characters: characters } = useAppSelector(
    (state) => state.charactersSlice
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
    <Container maxWidth="xl">
      <div className="flex justify-center gap-4 pt-[50px]">
        <SideBar />
        <GridContainer>
          {characters?.map((character: Character) => (
            <Link key={character.id} href={`/character/${character.id}`}>
              <CharacterCard
                image={character.image}
                name={character.name}
                type={character.type}
                location={character.location}
                episode={character.episode}
                status={character.status}
              />
            </Link>
          ))}
        </GridContainer>
      </div>
      <BasicPagination
        pages={data.characters.info?.pages}
        setPage={setPage}
        page={page}
      />
    </Container>
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
  max-width: 1200px;
`;
