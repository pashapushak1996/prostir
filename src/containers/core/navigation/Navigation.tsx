import {NavigationContainer} from '@react-navigation/native';

import {AppScreens} from './AppScreens/AppScreens.tsx';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  );
};

export default Navigation;
