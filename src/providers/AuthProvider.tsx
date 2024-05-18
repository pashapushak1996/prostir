import React, {ReactNode, useCallback, useEffect, useState} from 'react';

import {authManager} from '@app/services/authManager.ts';
import SCREENS from '@app/constants/screens.ts';
import AuthScreens from '@app/containers/core/navigation/AuthScreens/AuthScreens.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from '@app/types/navigation.ts';
import {ActivityIndicator} from 'react-native';

type Props = {
  children: ReactNode;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const AuthProvider = (props: Props) => {
  const [_, updateState] = useState(0);

  authManager.authUpdated = useCallback(() => {
    updateState(prevState => prevState + 1);
  }, []);

  useEffect(() => {
    authManager.loadState();
  }, []);

  if (authManager.authStatus === 'idle') {
    // TODO Add splash screen
    return <ActivityIndicator />;
  }

  if (!authManager.authData) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.AUTH_STACK} component={AuthScreens} />
      </Stack.Navigator>
    );
  }

  return <>{props.children}</>;
};

export default AuthProvider;
