import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootStackParamsList} from '@app/types/navigation.ts';
import ProfileScreen from '@app/containers/profile-screen/ProfileScreen';
import SCREENS from '@app/constants/screens.ts';

const TabBarStack = createBottomTabNavigator<RootStackParamsList>();

const BottomTabBarScreens = () => {
  return (
    <TabBarStack.Navigator>
      <TabBarStack.Screen name={SCREENS.PROFILE_SCREEN} component={ProfileScreen} />
    </TabBarStack.Navigator>
  );
};

export default BottomTabBarScreens;
