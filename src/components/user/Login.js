import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import {
  API_BASE_URL as BASE,
  USER,
} from '../../config/host-config';

const Login = () => {
  const REQUEST_URL = BASE + USER + '/signin';

  // 서버에 비동기 로그인 요청(AJAX 요청)
  const fetchLogin = () => {
    // 이메일과 비밀번호를 직접 지목해서 얻어오세요. (getElementById로 직접 지목해서 가져오세요.)
    // 요청방식: POST / email, password라는 이름으로 JSON을 전송하세요.
    // 응답 데이터를 console.log로 확인하세요.
    const email = document.getElementById('email').value;
    const password =
      document.getElementById('password').value;

    fetch(REQUEST_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.text())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    // 입력값에 관련된 처리를 하고 싶다면 여기서 하면 됩니다.

    // 서버에 로그인 요청 전송
    fetchLogin();
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
      style={{ margin: '200px auto' }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component='h1' variant='h5'>
            로그인
          </Typography>
        </Grid>
      </Grid>

      <form noValidate onSubmit={loginHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='email address'
              name='email'
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              name='password'
              label='on your password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
            >
              로그인
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
