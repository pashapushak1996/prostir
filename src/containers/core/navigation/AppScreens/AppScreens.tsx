import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamsList} from '@app/types/navigation.ts';
import SCREENS from '../../../../constants/screens.ts';
import BottomTabBarScreens from '@app/containers/core/navigation/BottomTabBarScreens/BottomTabBarScreens.tsx';

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const AppScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.BOTTOM_BAR} component={BottomTabBarScreens} />
    </Stack.Navigator>
  );
};
