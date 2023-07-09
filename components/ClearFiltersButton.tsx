'use client';

import { clearFilter } from '@/redux/features/charactersSlice';
import { FC } from 'react';
import { useAppDispatch } from '../redux/store';

interface ClearFlittersButtonProps {}

const ClearFlittersButton: FC<ClearFlittersButtonProps> = ({}) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="bg-black text-white px-2 py-1 rounded"
      onClick={() => dispatch(clearFilter())}
    >
      Clear filters
    </button>
  );
};

export default ClearFlittersButton;
