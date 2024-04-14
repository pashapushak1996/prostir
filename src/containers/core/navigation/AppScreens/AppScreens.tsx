import React, {useMemo, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamsList} from '@app/types/navigation/navigation.types.ts';
import SCREENS from '../../../../constants/screens.ts';
import AuthScreens from '@app/containers/core/navigation/AuthScreens/AuthScreens.tsx';
import BottomTabBarScreens from '@app/containers/core/navigation/BottomTabBarScreens/BottomTabBarScreens.tsx';

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const AppScreens = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const initialRoute = useMemo(() => (isSignIn ? SCREENS.BOTTOM_BAR : SCREENS.AUTH_STACK), [isSignIn]);

  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.AUTH_STACK} component={AuthScreens} />
      <Stack.Screen name={SCREENS.BOTTOM_BAR} component={BottomTabBarScreens} />
    </Stack.Navigator>
  );
};
