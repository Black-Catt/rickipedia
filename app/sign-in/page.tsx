'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectAuthState, signIn } from '@/redux/features/authSlice';
import Link from 'next/link';
import { Container, Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ErrorList } from '../../components/index';
import { redirect } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../redux/store';

interface SignInPageProps {}

interface SignInFormValues {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const SignInPage: FC<SignInPageProps> = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values: SignInFormValues) => {
    dispatch(signIn(values));
  };

  if (user) {
    redirect('/');
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h5" sx={{ pt: 4, textAlign: 'center' }}>
        Sign in
      </Typography>
      <p className="flex justify-center mb-6">
        <Link className="text-primary " href="/sign-up">
          Need an account?
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
        <TextField placeholder="Email" type="email" {...register('email')} />
        <TextField
          placeholder="Password"
          type="password"
          {...register('password')}
        />
        <div className="flex justify-end">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#a78bfa',
              width: '100px',
              '&:hover': {
                backgroundColor: '#815af4',
              },
            }}
            type="submit"
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default SignInPage;
