import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '@app/containers/auth/SignInScreen';
import SCREENS from '@app/constants/screens.ts';
import SignUpScreen from '@app/containers/auth/SignUpScreen.tsx';

const Stack = createNativeStackNavigator();

const AuthScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.SIGN_IN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={SCREENS.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthScreens;
