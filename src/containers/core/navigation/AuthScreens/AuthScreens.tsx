import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '@app/containers/auth/SignInScreen';
import SCREENS from '@app/constants/screens.ts';

const Stack = createNativeStackNavigator();

const AuthScreens = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.SIGN_IN}>
      <Stack.Screen name={SCREENS.SIGN_IN} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthScreens;
