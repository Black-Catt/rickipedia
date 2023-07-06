'use client';

import { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { updateSort } from '@/redux/features/charactersSlice';
import { useAppDispatch } from '../redux/store';

interface SortProps {}

const Sort: FC<SortProps> = () => {
  const dispatch = useAppDispatch();

  const [sort, setSort] = useState('');

  const handleChange = (e: SelectChangeEvent) => {
    setSort(e.target.value as string);
    dispatch(updateSort(e.target.value));
  };

  return (
    <FormControl sx={{ width: '130px' }}>
      <InputLabel id="sorting">Sort by</InputLabel>
      <Select
        labelId="sorting"
        id="sorting"
        value={sort}
        label="sorting"
        onChange={handleChange}
        className="shadow-lg"
      >
        <MenuItem value="a-z">A-Z</MenuItem>
        <MenuItem value="z-a">Z-A</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sort;
