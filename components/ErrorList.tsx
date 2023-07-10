'use client';

import { Alert } from '@mui/material';
import { FC } from 'react';
import { FieldErrorsImpl } from 'react-hook-form';

interface ErrorListProps {
  errors: Partial<FieldErrorsImpl<any>>;
}

const ErrorList: FC<ErrorListProps> = ({ errors }) => {
  return (
    <div>
      {(Object.keys(errors) as (keyof typeof errors)[]).map((error, i) => (
        <Alert key={i} severity="error">
          {errors[String(error)]!.message as string}
        </Alert>
      ))}
    </div>
  );
};
export default ErrorList;
