'use client';

import { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../redux/store';
import { updateFilters } from '@/redux/features/charactersSlice';

interface SelectFilterProps {}

const SelectFilter: FC<SelectFilterProps> = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value as string);
    dispatch(
      updateFilters({ name: e.target.name, value: String(e.target.value) })
    );
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <InputLabel id="demo-simple-select-label">Episode</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Episode"
        name="episode"
        onChange={handleChange}
      >
        {[...Array(51).keys()].map((el) => (
          <MenuItem key={el} value={el + 1}>
            Episode - {el + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;
