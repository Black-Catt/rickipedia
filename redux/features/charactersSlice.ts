import { createSlice } from '@reduxjs/toolkit';
import { Character } from '@/graphql/types';

interface InitialState {
  characters: Character[];
  filtered_characters: Character[];
  sort: string;
  filters: Filters;
}

type Gender = 'Male' | 'Genderless' | 'Female' | 'Unknown';
type Status = 'Alive' | 'Dead' | 'Unknown';
interface Filters {
  text: string;
  gender: Gender;
  status: Status;
}

const initialState: InitialState = {
  characters: [],
  filtered_characters: [],
  sort: 'a-z',
  filters: {
    text: '',
    gender: 'Male',
    status: 'Alive',
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
      return { ...state, filters: { ...state.filters, [name]: value } };
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
  },
});

export const {
  loadCharacters,
  updateFilters,
  filterCharacters,
  sortCharacters,
  updateSort,
} = charactersSlice.actions;
export default charactersSlice.reducer;
