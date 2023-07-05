'use client';

import { FC } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import { Info } from '../graphql/types';

interface BasisPaginationProps extends Info {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

const BasicPagination: FC<BasisPaginationProps> = ({
  setPage,
  page,
  pages,
}) => {
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
