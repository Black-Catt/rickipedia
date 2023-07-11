'use client';

import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import { setUser } from '@/redux/features/authSlice';
import ErrorList from '../../components/ErrorList';
import toast from 'react-hot-toast';

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
}

const validationScheme = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const SignUpPage: FC = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(validationScheme),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (values: SignUpFormValues) => {
    dispatch(setUser(values));
    toast.success('Successfully entered!');
    setTimeout(() => {
      window.location.replace('/');
    }, 1500);
  };

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h5" sx={{ pt: 4, textAlign: 'center' }}>
          Sign up
        </Typography>
        <p className="flex justify-center mb-6">
          <Link className="text-primary " href="/sign-in">
            Have an account?
          </Link>
        </p>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
          }}
        >
          <ErrorList errors={errors} />
          <TextField placeholder="Username" {...register('username')} />
          <TextField placeholder="Email" type="email" {...register('email')} />
          <TextField
            placeholder="Password"
            type="password"
            {...register('password')}
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#a78bfa',
                width: '100px',
                '&:hover': {
                  backgroundColor: '#815af4',
                },
              }}
              disabled={isSubmitting}
            >
              Sign Up
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default SignUpPage;
