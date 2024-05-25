import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet} from 'react-native';

import Box from '@app/components/Box';
import AppText from '@app/components/AppText';
import {ProfileIcon} from '@assets/icons/profile-icon.tsx';
import ProfileScreenTab from '@app/containers/profile-screen/components/ProfileScreenTab.tsx';
import {LocationIcon, LogoutIcon, SettingsIcon} from '@assets/icons';
import {IMAGES_MAP} from '@app/constants/image.map.ts';
import AppImage from '@app/components/AppImage.tsx';
import {authManager} from '@app/services/authManager.ts';

const ProfileScreen = () => {
  const handlePressTab = (screen: string) => () => {
    // TODO navigate to certain screen
  };

  const screenTabs = useMemo(
    () => [
      {
        Icon: ProfileIcon,
        label: 'My Profile',
        onPress: handlePressTab('edit_profile'),
      },
      {
        Icon: LocationIcon,
        label: 'My Locations',
        onPress: handlePressTab('locations_screen'),
      },
      {
        Icon: SettingsIcon,
        label: 'Settings',
        onPress: handlePressTab('settings_screen'),
      },
    ],
    [],
  );

  const screenTabsToRender = useMemo(
    () => screenTabs.map(tab => <ProfileScreenTab key={tab.label} {...tab} />),
    [screenTabs],
  );

  return (
    <Box backgroundColor={'mainBackground'} height={'100%'}>
      <SafeAreaView style={styles.flex}>
        <Box
          py={'ml'}
          mb={'l'}
          borderBottomColor={'secondaryLighter'}
          borderBottomWidth={1}>
          <AppText textAlign={'center'} variant={'screenHeader'}>
            Profile
          </AppText>
        </Box>

        <Box alignItems={'center'}>
          <Box
            width={100}
            height={100}
            alignItems={'center'}
            justifyContent={'center'}
            mb={'ml'}
            borderRadius={'inf'}
            backgroundColor={'secondaryLighter'}>
            <AppImage
              width={'50%'}
              height={'50%'}
              source={IMAGES_MAP.profileDefaultImage}
            />
          </Box>
          <AppText variant={'mainLabel'}>John Doe</AppText>
          <AppText fontSize={16} fontWeight={'400'} color={'textLighter'}>
            john.doe@gmail.com
          </AppText>
        </Box>
        <ScrollView style={styles.tabContainer}>
          {screenTabsToRender}
          <ProfileScreenTab
            label={'Log out'}
            Icon={() => <LogoutIcon width={24} height={24} />}
            onPress={() => authManager.signOut()}
            withArrow={false}
          />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  tabContainer: {paddingHorizontal: 24},
  flex: {flex: 1},
});

export default ProfileScreen;
