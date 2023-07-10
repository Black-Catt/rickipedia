'use client';

import { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../redux/store';
import { updateFilters } from '@/redux/features/charactersSlice';

interface SelectFilterProps {
  nameId: string;
}

const SelectFilter: FC<SelectFilterProps> = ({ nameId }) => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value as string);
    dispatch(
      updateFilters({ name: e.target.name, value: String(e.target.value) })
    );
  };

  const label = nameId === 'episodeId' ? 'Episode' : 'Location';

  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <InputLabel id="simple-select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="simple-select"
        value={value}
        label="Episode"
        name={nameId}
        onChange={handleChange}
      >
        {[...Array(51).keys()].map((el) => (
          <MenuItem key={el} value={el + 1}>
            {label} - {el + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;
