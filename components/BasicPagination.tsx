'use client';

import { FC } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import { Info } from '../core/types';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setPage } from '@/redux/features/charactersSlice';

interface BasisPaginationProps extends Info {}

const BasicPagination: FC<BasisPaginationProps> = ({ pages }) => {
  const { page } = useAppSelector((state) => state.characters);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Container maxWidth="xs" sx={{ marginBottom: '2rem' }}>
      <Stack spacing={2}>
        <Pagination
          count={pages || 0}
          page={page}
          siblingCount={1}
          onChange={handleChange}
        />
      </Stack>
    </Container>
  );
};

export default BasicPagination;
