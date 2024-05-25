import React from 'react';

import Box from '@app/components/Box';
import AppText from '@app/components/AppText';
import AppButton from '@app/components/AppButton.tsx';
import {authManager} from '@app/services/authManager.ts';

const ProfileScreen = () => {
  return (
    <Box>
      <AppText>Profile Screen</AppText>
      <AppButton
        title={'Sign out'}
        onPress={() => {
          authManager.signOut();
        }}
      />
    </Box>
  );
};

export default ProfileScreen;
