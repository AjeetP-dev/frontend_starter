import { Button, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useGetUserDetails } from '../../api/mutation/user';
import { User } from '../../types';

const LoginPage = () => {
  const formMethods = useForm<User>({ mode: 'onChange' });
  const { register, handleSubmit } = formMethods;

  const { mutate: getUserDetails, data } = useGetUserDetails();

  async function onSubmit(values: User) {
    console.log(values);
    getUserDetails();
  }

  console.log(data);
  return (
    <Paper
      style={{
        maxWidth: 400,
        margin: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      elevation={3}
    >
      <Typography variant="h4" gutterBottom>
        ERP
      </Typography>
      <form style={{ width: '100%', marginTop: '8px' }} onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register('username')}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          {...register('password')}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '24px' }}>
          Sign In
        </Button>
      </form>
    </Paper>
  );
};

export default LoginPage;
