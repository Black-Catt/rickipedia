import { createSlice } from '@reduxjs/toolkit';
import { Character } from '@/core/types';

interface InitialState {
  characters: Character[];
  filtered_characters: Character[];
  sort: string;
  page: number;
  filters: Filters;
}

export type Gender = 'Male' | 'Genderless' | 'Female' | 'Unknown';
export type Status = 'Alive' | 'Dead' | 'Unknown';
export type Species =
  | 'Human'
  | 'Alien'
  | 'Humanoid'
  | 'Poopybutthole'
  | 'Mythological'
  | 'Unknown'
  | 'Animal'
  | 'Disease'
  | 'Robot'
  | 'Cronenberg'
  | 'Planet';

interface Filters {
  text: string;
  gender: Gender | null;
  status: Status | null;
  species: Species | null;
  episode: string;
}

const initialState: InitialState = {
  characters: [],
  filtered_characters: [],
  sort: 'a-z',
  page: 1,
  filters: {
    text: '',
    gender: null,
    status: null,
    species: null,
    episode: '1',
  },
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    loadCharacters: (state, { payload }) => {
      state.characters = payload;
      state.filtered_characters = payload;
    },
    updateFilters: (state, { payload }) => {
      const { name, value } = payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
        page: 1,
      };
    },
    filterCharacters: (state) => {
      const { characters } = state;
      const { text } = state.filters;
      let filterResult = [...characters];

      if (text) {
        filterResult = characters.filter((character) => {
          return character.name
            ? character.name.toLowerCase().startsWith(text.toLowerCase())
            : character.name;
        });
      }

      state.filtered_characters = filterResult;
    },
    updateSort: (state, { payload }) => {
      state.sort = payload;
    },
    sortCharacters: (state) => {
      const { sort, filtered_characters } = state;
      let sortedCharacters: Character[] = [];

      switch (sort) {
        case 'a-z':
          sortedCharacters = filtered_characters.sort((a, b) => {
            const nameA = a.name || '';
            const nameB = b.name || '';
            return nameA.localeCompare(nameB);
          });
          break;

        case 'z-a':
          sortedCharacters = filtered_characters.sort((a, b) => {
            const nameA = a.name || '';
            const nameB = b.name || '';
            return nameB.localeCompare(nameA);
          });
          break;
      }

      state.filtered_characters = sortedCharacters;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    clearFilter: (state) => {
      state.filters.status = null;
      state.filters.gender = null;
      state.filters.species = null;
      state.filters.episode = '1';
      state.page = 1;
    },
  },
});

export const {
  loadCharacters,
  updateFilters,
  filterCharacters,
  sortCharacters,
  updateSort,
  setPage,
  clearFilter,
} = charactersSlice.actions;
export default charactersSlice.reducer;
