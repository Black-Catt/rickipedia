'use client';

import { FC, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useAppDispatch } from '../redux/store';
import { updateFilters } from '@/redux/features/charactersSlice';

interface FiltersProps {
  title: string;
  category: string[];
}

const Filters: FC<FiltersProps> = ({ title, category }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
    dispatch(updateFilters({ name: e.target.name, value: e.target.value }));
  };

  return (
    <FormControl>
      <FormLabel
        sx={{
          color: 'white',
          '&.Mui-focused': {
            color: '#824AC3',
          },
        }}
        id="demo-controlled-radio-buttons-group "
        className="capitalize"
      >
        {title}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name={title}
        value={value}
        onChange={handleChange}
      >
        {category.map((el, i) => (
          <FormControlLabel
            key={i}
            value={el}
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#824AC3',
                  },
                }}
              />
            }
            label={el}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Filters;
