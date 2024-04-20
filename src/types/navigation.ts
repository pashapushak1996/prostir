import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import SCREENS from '../constants/screens.ts';

export type RootStackParamsList = {
  [SCREENS.AUTH_STACK]: undefined;
  [SCREENS.BOTTOM_BAR]: undefined;

  [SCREENS.HOME]: undefined;
  [SCREENS.SIGN_IN]: undefined;
  [SCREENS.PROFILE_SCREEN]: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamsList>;
