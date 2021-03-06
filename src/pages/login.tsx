import {
  Button,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { QueryClient, useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { client } from '../utils/api-client';
import { Form, Formik } from 'formik';
import { InputField } from '../components/InputField';
import Link from 'next/link';
import { IncomingMessage } from 'node:http';
import cookie from 'cookie';
import React from 'react';
import { GetServerSideProps } from 'next';
import Header from '../components/Header';
import { BASE_URL } from '../constants';
import { dehydrate } from 'react-query/hydration';

interface LoginProps {}

const Login = () => {
  const route = useRouter();
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    (data: { email: string; password: string }) =>
      client(`${BASE_URL}/users/signin`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }),
    {
      onSuccess: () => {
        route.push('/me');
      },
    }
  );

  return (
    <Box maxW='400' w='100%'>
      <Header title='Login' />
      <Box textStyle='h1' textAlign='center' mb={20} as='h1'>
        Login
      </Box>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {() => (
          <Form>
            {isError ? (
              <Alert status='error'>
                <AlertIcon />
                <AlertTitle mr={2}>{(error as Error).message}</AlertTitle>
              </Alert>
            ) : null}
            {isSuccess ? (
              <Alert status='success'>
                <AlertIcon />
                <AlertTitle mr={2}>Login successful! Redirecting...</AlertTitle>
              </Alert>
            ) : null}

            <VStack spacing='12px' alignItems='stretch' width='400px'>
              <InputField
                name='email'
                placeholder='Email'
                label='Email'
                type='text'
              />
              <InputField
                name='password'
                placeholder='Password'
                label='Password'
                type='password'
              />
            </VStack>
            <HStack spacing='8px' mt='16px'>
              <Button
                colorScheme='teal'
                type='submit'
                isLoading={isLoading}
                loadingText='Submitting'
              >
                Login
              </Button>
              <Button colorScheme='gray' ml={3}>
                <Link href='/register'>
                  <a>Register</a>
                </Link>
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async function ({
  req,
}: any) {
  const token = req.cookies?.jwt;
  if (token) {
    try {
      const queryClient = new QueryClient();
      await queryClient.fetchQuery('userProfile', () => {
        return client(`${BASE_URL}/users/me`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            Authorization: token && `Bearer ${token}`,
          },
        });
      });
      return {
        props: { dehydratedState: dehydrate(queryClient) },
        redirect: {
          destination: '/me',
          permanent: false,
        },
      };
    } catch (err) {
      return {
        props: {},
      };
    }
  }
  return { props: {} };
};

//   // try {
//   //   const queryClient = new QueryClient();
//   //   const token = parseCookies().jwt;
//   //   await queryClient.fetchQuery('userProfile', () =>
//   //     client('http://localhost:4444/api/v1/users/me', {
//   //       method: 'GET',
//   //       credentials: 'include',
//   //       headers: {
//   //         Authorization: token && `Bearer ${token}`,
//   //       },
//   //       referrer: 'https://talaria-web.vercel.app/',
//   //     })
//   //   );
//   //   return {
//   //     props: { dehydratedState: dehydrate(queryClient) },
//   //     redirect: {
//   //       destination: '/profile',
//   //       permanent: false,
//   //     },
//   //   };
//   // } catch (err) {
//   //   return {
//   //     props: {},
//   //   };
//   // }
//   // if (req.cookies?.jwt) {
//   //   try {
//   //     const queryClient = new QueryClient();
//   //     await queryClient.fetchQuery('userProfile', () =>
//   //       client('http://localhost:4444/api/v1/users/me', {
//   //         method: 'GET',
//   //         credentials: 'include',
//   //         headers: {
//   //           Authorization: req.cookies?.jwt && `Bearer ${req.cookies.jwt}`,
//   //         },
//   //         referrer: 'https://talaria-web.vercel.app/',
//   //       })
//   //     );
//   //     return {
//   //       props: { dehydratedState: dehydrate(queryClient) },
//   //       redirect: {
//   //         destination: '/profile',
//   //         permanent: false,
//   //       },
//   //     };
//   //   } catch (err) {
//   //     return {
//   //       props: {},
//   //     };
//   //   }
//   // } else if (req) {
//   //   try {
//   //     const queryClient = new QueryClient();
//   //     const token = parseCookies().jwt;
//   //     await queryClient.fetchQuery('userProfile', () =>
//   //       client('http://localhost:4444/api/v1/users/me', {
//   //         method: 'GET',
//   //         credentials: 'include',
//   //         headers: {
//   //           Authorization: token && `Bearer ${req.cookies.jwt}`,
//   //         },
//   //         referrer: 'https://talaria-web.vercel.app/',
//   //       })
//   //     );
//   //     return {
//   //       props: { dehydratedState: dehydrate(queryClient) },
//   //       redirect: {
//   //         destination: '/profile',
//   //         permanent: false,
//   //       },
//   //     };
//   //   } catch (err) {
//   //     return {
//   //       props: {},
//   //     };
//   //   }
//   // } else {
//   //   return {
//   //     props: {},
//   //   };
//   // }
// };

export default Login;

function parseCookies(
  req?: IncomingMessage,
  options = {}
): { [key: string]: string } {
  return (
    cookie.parse(req ? req.headers.cookie || '' : document.cookie), options
  );
}
