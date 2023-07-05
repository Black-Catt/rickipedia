'use client';

import { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { useAppDispatch } from '../redux/store';
import { updateFilters } from '@/redux/features/charactersSlice';

const Search: FC = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setValue(searchText);
    dispatch(updateFilters({ name: e.target.name, value: searchText }));
  };
  return (
    <Box sx={{ margin: '0 auto', width: '100%' }}>
      <TextField
        fullWidth
        type="text"
        name="text"
        value={value}
        onChange={handleChange}
        placeholder="Search on this page"
      />
    </Box>
  );
};

export default Search;
