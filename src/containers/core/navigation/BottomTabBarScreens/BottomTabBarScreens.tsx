import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootStackParamsList} from '@app/types/navigation.ts';
import SCREENS from '@app/constants/screens.ts';
import {bottomTabScreens} from '@app/containers/core/navigation/BottomTabBarScreens/bottom-tab-screens.ts';
import {useTheme} from '@shopify/restyle';

const TabBarStack = createBottomTabNavigator<RootStackParamsList>();

const BottomTabBarScreens = () => {
  const {colors} = useTheme();

  const screens = useMemo(() => {
    return bottomTabScreens.map(screenObj => (
      <TabBarStack.Screen
        key={screenObj.name}
        name={screenObj.name as keyof RootStackParamsList}
        component={screenObj.component}
        options={{
          tabBarLabel: screenObj.label,
          tabBarIcon: ({color}) => (
            <screenObj.icon height={22} width={22} color={color} />
          ),
        }}
      />
    ));
  }, []);

  return (
    <TabBarStack.Navigator
      initialRouteName={SCREENS.PROFILE_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarLabelStyle: {fontSize: 14, fontFamily: 'OpenSans'},
      }}>
      {screens}
    </TabBarStack.Navigator>
  );
};

export default BottomTabBarScreens;
