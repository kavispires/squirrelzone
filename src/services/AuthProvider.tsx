import { message } from 'antd';
import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { UseMutateFunction, useMutation } from 'react-query';

import { auth, signIn } from './firebase';

type SignInProps = {
  email: string;
  password: string;
};

export const AuthContext = createContext<{
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: UseMutateFunction<User, FirebaseError, SignInProps, unknown>;
}>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  signIn: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticatedUser(user);

        message.info('You are logged in');
      } else {
        setAuthenticatedUser(null);
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const { isLoading: signingLoading, mutate } = useMutation<User, FirebaseError, SignInProps>({
    mutationKey: 'sign-in',
    mutationFn: async ({ email, password }) => {
      const response = await signIn(email, password);
      console.log({ response });
      return response.user;
    },
    onSuccess: (data) => {
      message.success('You were logged in');
      setAuthenticatedUser(data);
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  const isAuthenticated = Boolean(authenticatedUser);

  return (
    <AuthContext.Provider
      value={{
        user: authenticatedUser,
        isLoading: isLoading || signingLoading,
        isAuthenticated,
        signIn: mutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
