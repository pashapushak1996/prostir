import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {authManager} from '@app/services/authManager.ts';
import SCREENS from '@app/constants/screens.ts';
import AuthScreens from '@app/containers/core/navigation/AuthScreens/AuthScreens.tsx';
import {RootStackParamsList} from '@app/types/navigation.ts';

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
    const initAuthState = async () => {
      await authManager.loadState();

      SplashScreen.hide();
    };

    initAuthState();
  }, []);

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
