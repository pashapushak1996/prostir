import {NavigationContainer} from '@react-navigation/native';

import {AppScreens} from './AppScreens/AppScreens.tsx';
import AuthProvider from '@app/providers/AuthProvider.tsx';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppScreens />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Navigation;
